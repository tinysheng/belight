import { useState, useEffect } from 'react'
import { get } from "@/services/api"

export interface ArticleDetailProps {
  id: number;
  title: string;
  cover_url: string;
  content_html: string;
  category: string;
  tags: string[];
  views: number;
  created_at: string;
  updated_at: string;
}

export function useGetPosts(id: number) {
  const [articleDetail, setArticleDetail] = useState<ArticleDetailProps | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchArticleDetail = async () => {
      try {
        const data = await get<ArticleDetailProps>(`/api/articles/${id}`);
        setArticleDetail(data);
        setLoaded(true);
      } catch (error) {
        console.log('文章详情获取失败', error)
      }
    }

    fetchArticleDetail();
  }, [id])

  return { articleDetail, loaded }
}