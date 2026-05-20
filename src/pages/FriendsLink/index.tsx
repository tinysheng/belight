import styled from "@emotion/styled";
import { useConfig } from "@/hooks/useConfig.ts";

export default function FriendsLink() {
  const { config } = useConfig();

  return (
    <Container>
      <Section>
        <SectionTitle>友情链接</SectionTitle>
        <Tips>以下是本站的友情链接，排名不分先后：</Tips>
        <Grid>
          {friendLinks.map((link) => (
            <Card key={link.name}>
              <Avatar>
                <img src={link.avatar} alt={link.name} />
              </Avatar>
              <Info>
                <strong>{link.name}</strong>
                <p>{link.desc}</p>
              </Info>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section>
        <SectionTitle>本站信息</SectionTitle>
        <SiteInfo>
          <li>
            <Label>名称：</Label> {config?.Title || "加载中..."}
          </li>
          <li>
            <Label>简介：</Label> {config?.Subtitle || "加载中..."}
          </li>
          <li>
            <Label>网址：</Label>
            <a href={config?.Site} target="_blank" rel="noreferrer">
              {config?.Site || "加载中..."}
            </a>
          </li>
          <li>
            <Label>头像：</Label>
            <a href={config?.Avatar} target="_blank" rel="noreferrer">
              {config?.Avatar || "加载中..."}
            </a>
          </li>
        </SiteInfo>
      </Section>

      <Section>
        <SectionTitle>申请须知</SectionTitle>
        <ul>
          <li>请先添加本站友链后再申请友链，并通过留言或邮件告知</li>
          <li>
            不和商业、政治、无实质内容的网站交换，优先和具有原创作品的全站 HTTPS
            站点交换
          </li>
          <li>
            原则上要求您的博客主页有较固定内容且已被 Google 等搜索引擎收录
          </li>
          <li>
            由于访问安全性问题，请务必提供 HTTPS
            链接的头像地址（或留言时备注暂无无碍本站主动保存）
          </li>
          <li>
            不接受短站、资源站等非博客类站点交换，原则上只与技术/日志类博客交换友链
          </li>
        </ul>
      </Section>
    </Container>
  );
}

const friendLinks = [
  {
    name: '项目主页',
    desc: 'vanBlog',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '小帅的技术博客',
    desc: '拥抱技术，热爱生活',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: 'Mosu',
    desc: '淡定的人生从不需要解释',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '牵菌的博客',
    desc: '闲鱼的生活记录',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '前端 | 面试进阶',
    desc: 'whykown助你拿offer',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '叶继伟的 blog',
    desc: '技术、分享、折腾',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: 'GT的官方博客',
    desc: '官方自己要发发声',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '网络日志',
    desc: '网络日志 · 一多人与技术的故事',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '阿明的小博客',
    desc: '分享你想要的一切！',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '运维笔记',
    desc: '一个专注运维的网站',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '从01开始',
    desc: '那就从零开始',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: 'LinKinHan的安全日志',
    desc: '一起学习交流网络安全',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: 'Ovenzjg的小窝',
    desc: '生活与编程',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  },
  {
    name: '郭郭的博客',
    desc: '前端知识系统梳理、前端笔记',
    avatar: 'https://free.picui.cn/free/2025/12/30/69538dc25410b.jpg'
  }
];

const Container = styled.div`
  max-width: var(--ts-main-wrapper-w);
  margin: 0 auto;
  padding: 3rem var(--ts-spacing-lg);
  background: var(--ts-gradient-bg);
  color: #ccc;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Tips = styled.p`
  color: #888;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const SiteInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-bottom: 0.8rem;
    color: #ccc;
    a {
      color: var(--ts-color-ice);
      text-decoration: underline;
      &:hover {
        color: #ffffff;
      }
    }
  }
`;

const Label = styled.span`
  display: inline-block;
  width: 70px;
  color: #aaa;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #2b2b2b;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background: #444;
  }
`;

const Avatar = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  flex: 1;
  strong {
    color: #fff;
    font-weight: 600;
  }
  p {
    color: #999;
    font-size: 0.9rem;
    margin: 0.3rem 0 0;
  }
`;
