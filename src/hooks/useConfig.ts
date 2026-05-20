import { useState, useEffect } from 'react';
import { get } from '@/services/api';

interface NavItem {
  text: string;
  link: string;
  icon: string;
}

interface ConfigProps {
  Avatar: string;
  Author: string;
  Description: string;
  Title: string;
  Subtitle: string;
  Site: string;
  Navs: NavItem[];
}

const cacheConfig: ConfigProps[] | null = null;
let pendingPromise: Promise<ConfigProps> | null = null;

export function useConfig() {
  const [config, setConfig] = useState<ConfigProps>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (cacheConfig) return;
    let retryTimer: NodeJS.Timeout | null = null;

    const fetchConfig = async (retry = 0) => {
      try {
        if (!pendingPromise) {
          pendingPromise = get<ConfigProps>('/api/config');
        }
        const data = await pendingPromise;
        setConfig(data);
        setLoaded(true);
      } catch (error) {
        if (retry < 2) {
          retryTimer = setTimeout(() => {
            fetchConfig(retry + 1);
          }, 1000);
        } else {
          console.log('配置资源获取失败', error);
        }
      }
    }
    fetchConfig();

    return () => {
      if (retryTimer) {
        clearTimeout(retryTimer);
      }
    }
  }, [])

  return { config, loaded }
}