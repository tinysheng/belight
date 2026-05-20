// 文章列表数据获取/缓存
import { useState, useEffect } from 'react'
import { get } from '@/services/api'

export interface ArticleProps {
  id: number;
  title: string;
  cover_url: string;
  excerpt: string;
  category: string;
  tags: string[];
  top_level: number;
  views: number;
  status: string;
  created_at: string;
  updated_at: string;
}

let cachedArticles: ArticleProps[] | null = null;
let pendingPromise: Promise<ArticleProps[]> | null = null;

export function useGetArticles() {
  const [articles, setArticles] = useState<ArticleProps[]>(cachedArticles ?? [])
  const [loaded, setLoaded] = useState<boolean>(!!cachedArticles)

  useEffect(() => {
    if (cachedArticles) return;

    const fetchArticleListData = async (retry = 1) => {
      try {
        if (!pendingPromise) {
          pendingPromise = get<ArticleProps[]>('/api/articles');
        }
        const data = await pendingPromise;

        const newData = data.map((article) => ({
          ...article,
          excerpt: article.excerpt?.slice(0, 100) || '',
          created_at: article.created_at?.slice(0, 10) || '',
          updated_at: article.updated_at?.slice(0, 10) || ''
        }));

        cachedArticles = newData;
        setArticles(newData);
        setLoaded(true);
      } catch (error) {
        if (retry < 3) {
          setTimeout(() => {
            fetchArticleListData(retry + 1)
          }, 1000)
        } else {
          console.log('文章资源获取失败', error)
          setLoaded(true);
        }
      }
    }

    fetchArticleListData();
  }, [])

  return { articles, loaded }
}