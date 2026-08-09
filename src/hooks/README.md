# Hooks 解读文档

## 目录

- [usePosts](#useposts)
- [usePostDetail](#usepostdetail)

---

## usePosts

**文件路径**: `src/hooks/usePosts.ts`

**用途**: 获取文章列表数据，提供跨组件的缓存与请求去重能力。

### 核心机制

#### 1. 模块级缓存（Module-level Cache）

```typescript
let cachedPosts: PostCard[] | null = null
let pendingPromise: Promise<PostCard[]> | null = null
```

- `cachedPosts`: 存储已获取的文章列表，页面刷新后清空，路由切换期间保持。
- `pendingPromise`: 存储进行中的请求 Promise，防止同一时刻重复发起请求。

#### 2. 状态声明

| 状态 | 类型 | 初始值 | 说明 |
|------|------|--------|------|
| `posts` | `PostCard[]` | `cachedPosts \|\| []` | 文章列表数据 |
| `loading` | `boolean` | `!cachedPosts` | 是否正在加载 |
| `error` | `string \| null` | `null` | 错误信息 |

#### 3. 请求流程

```
组件挂载
  ↓
cachedPosts 是否存在？
  ├─ 是 → 直接返回缓存数据，不发起请求
  └─ 否 → 进入 fetchPosts
            ↓
        pendingPromise 是否存在？
          ├─ 是 → 复用已有 Promise，等待结果
          └─ 否 → 创建新 Promise: getPostList()
                    ↓
                请求成功 → cachedPosts = data, setPosts(data)
                请求失败 → setError(err.message)
                无论成败 → setLoading(false)
```

#### 4. 关键设计点

**缓存命中优化**

当用户从文章详情页返回列表页时，`cachedPosts` 仍有数据，组件不会重新请求，实现瞬时渲染。

**请求去重（Request Deduplication）**

如果两个组件同时调用 `usePosts()`，只有第一个会创建 `pendingPromise`，第二个会直接复用同一个 Promise，避免重复请求。

**错误处理**

```typescript
catch (err: unknown) {
 if (err instanceof Error) {
  setError(err.message || '获取文章列表失败')
 }
}
```

使用 `unknown` 类型 + `instanceof Error` 判断，比 `any` 更安全，能正确提取错误信息。

### 返回值

```typescript
{ posts: PostCard[], loading: boolean, error: string | null }
```

### 使用示例

```tsx
import { usePosts } from '@/hooks/usePosts'

function Posts() {
 const { posts, loading, error } = usePosts()

 if (loading && posts.length === 0) return <Loading />
 if (error) return <Error message={error} />

 return (
  <ul>
   {posts.map((post) => (
    <li key={post.id}>{post.title}</li>
   ))}
  </ul>
 )
}
```

---

## usePostDetail

**文件路径**: `src/hooks/usePostDetail.ts`

**用途**: 根据文章 slug 获取单篇文章详情，支持竞态请求取消。

### 核心机制

#### 1. 状态声明

| 状态 | 类型 | 初始值 | 说明 |
|------|------|--------|------|
| `post` | `PostDetail \| null` | `null` | 文章详情数据 |
| `loading` | `boolean` | `!!slug` | 是否正在加载 |
| `error` | `string \| null` | `null` | 错误信息 |

#### 2. 请求流程

```
slug 变化 / 组件挂载
  ↓
slug 是否为空？
  ├─ 是 → 直接 return，不发起请求
  └─ 否 → 进入 fetchDetail
            ↓
        设置 loading=true, error=null
            ↓
        发起请求: getPostDetail(slug)
            ↓
        cancelled = false？
          ├─ 是 → setPost(data), setLoading(false)
          └─ 否 → 忽略结果（竞态保护）
```

#### 3. 关键设计点

**竞态请求取消（Race Condition Cancellation）**

```typescript
let cancelled = false

// 请求完成后
if (!cancelled) {
 setPost(data)
}

// 组件卸载或 slug 变化时
return () => {
 cancelled = true
}
```

场景：用户快速切换两篇文章 A → B。

- A 的请求发出后，用户点击 B。
- `slug` 变化，`useEffect` 清理函数执行，`cancelled = true`。
- A 的请求返回，因 `cancelled = true`，`setPost` 不会执行。
- B 的请求正常发起并更新状态。

这避免了"先请求后返回"导致的旧数据覆盖新问题。

**依赖追踪**

```typescript
useEffect(() => { ... }, [slug])
```

`slug` 作为唯一依赖，确保文章切换时重新获取数据。

**状态重置**

每次 `slug` 变化时，`setLoading(true)` 和 `setError(null)` 会被调用，确保 UI 正确进入加载状态并清除旧错误。

### 返回值

```typescript
{ post: PostDetail | null, loading: boolean, error: string | null }
```

### 使用示例

```tsx
import { useParams } from 'react-router-dom'
import { usePostDetail } from '@/hooks/usePostDetail'

function PostDetail() {
 const { slug } = useParams<{ slug: string }>()
 const { post, loading, error } = usePostDetail(slug || '')

 if (loading || !post) return <Loading />
 if (error) return <Error message={error} />

 return (
  <article>
   <h1>{post.title}</h1>
   <div dangerouslySetInnerHTML={{ __html: post.content }} />
  </article>
 )
}
```

---

## 两个 Hook 的对比

| 特性 | usePosts | usePostDetail |
|------|----------|---------------|
| 数据范围 | 列表（多篇文章） | 详情（单篇文章） |
| 缓存策略 | 模块级缓存，跨组件共享 | 无缓存，每次重新获取 |
| 请求去重 | 支持（pendingPromise） | 不支持（每次独立请求） |
| 竞态取消 | 不支持 | 支持（cancelled 标志） |
| 依赖项 | 无（仅在挂载时获取） | slug（变化时重新获取） |
| 适用场景 | 文章列表页、侧边栏随机文章 | 文章详情页 |

---

## 设计思路总结

1. **usePosts 侧重性能优化**：通过模块级缓存和请求去重，减少不必要的网络请求，提升列表页的响应速度。
2. **usePostDetail 侧重正确性**：通过竞态取消机制，确保用户快速切换文章时，界面始终展示最新选择的内容，不会出现数据错乱。
