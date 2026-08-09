import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

interface ArchiveArticle {
	id: number
	date: string
	title: string
	tags: string[]
}

interface ArchiveYear {
	year: string
	count: number
	articles: ArchiveArticle[]
}

const archiveData: ArchiveYear[] = [
	{
		year: '2025',
		count: 7,
		articles: [
			{
				id: 1,
				date: '05-28',
				title: 'React 19 新特性探索',
				tags: ['React', '前端'],
			},
			{
				id: 2,
				date: '05-15',
				title: 'TypeScript 高级类型体操',
				tags: ['TypeScript'],
			},
			{ id: 3, date: '04-20', title: 'Vite 构建优化实践', tags: ['工程化'] },
			{
				id: 4,
				date: '03-12',
				title: 'Node.js 性能调优指南',
				tags: ['Node.js', '后端'],
			},
			{ id: 5, date: '02-28', title: 'CSS 容器查询入门', tags: ['CSS'] },
			{ id: 6, date: '02-10', title: 'Docker 部署前端项目', tags: ['DevOps'] },
			{ id: 7, date: '01-05', title: '2025 年前端趋势展望', tags: ['日常'] },
		],
	},
	{
		year: '2024',
		count: 10,
		articles: [
			{ id: 8, date: '12-25', title: '年终总结：成长与收获', tags: ['日常'] },
			{
				id: 9,
				date: '12-10',
				title: 'Next.js 14 App Router 实践',
				tags: ['Next.js'],
			},
			{
				id: 10,
				date: '11-18',
				title: 'WebSocket 实时通信方案',
				tags: ['网络'],
			},
			{ id: 11, date: '10-30', title: '微前端架构设计思路', tags: ['架构'] },
			{ id: 12, date: '09-15', title: 'Rust 学习笔记', tags: ['Rust'] },
			{ id: 13, date: '08-22', title: 'GraphQL vs REST 选型', tags: ['API'] },
			{ id: 14, date: '07-08', title: '前端单元测试最佳实践', tags: ['测试'] },
			{ id: 15, date: '06-20', title: '浏览器渲染原理详解', tags: ['浏览器'] },
			{ id: 16, date: '05-01', title: '五一假期旅行日记', tags: ['生活'] },
			{ id: 17, date: '03-15', title: '从零搭建组件库', tags: ['组件库'] },
		],
	},
	{
		year: '2023',
		count: 5,
		articles: [
			{ id: 18, date: '11-11', title: '双十一购物清单', tags: ['生活'] },
			{ id: 19, date: '09-01', title: '开学季新计划', tags: ['日常'] },
			{
				id: 20,
				date: '07-20',
				title: 'Vue 3 Composition API 心得',
				tags: ['Vue'],
			},
			{
				id: 21,
				date: '05-05',
				title: '前端性能优化 checklist',
				tags: ['性能'],
			},
			{ id: 22, date: '01-01', title: '新年快乐', tags: ['生活'] },
		],
	},
]

export default function Archives() {
	return (
		<ArchiveContainer>
			{archiveData.map((yearGroup) => (
				<ArchiveYearSection key={yearGroup.year}>
					<ArchiveTitle>
						<em>{yearGroup.year}</em>
						<i></i>
						<span>—— {yearGroup.count}篇文章</span>
					</ArchiveTitle>
					{yearGroup.articles.map((article) => (
						<ArchiveLink key={article.id} to={`/posts/${article.id}`}>
							<em>{article.date}</em>
							<i></i>
							<span>{article.title}</span>
							<cite>{article.tags.map((t) => `#${t}`).join(' ')}</cite>
						</ArchiveLink>
					))}
				</ArchiveYearSection>
			))}
		</ArchiveContainer>
	)
}

const ArchiveContainer = styled.section`
	min-height: 100vh;
	padding-top: 32px;
	background-color: color-mix(in var(--color-bg), var(--color-bg-1), 30%);
`

const ArchiveYearSection = styled.section`
	margin-bottom: 24px;

	&:last-child {
		margin-bottom: 0;
	}
`

const ArchiveTitle = styled.h3`
	display: flex;
	align-items: center;
	height: 48px;
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 8px;

	em {
		width: 60px;
		text-align: right;
		font-weight: 600;
		color: var(--color-text);
	}

	& > i {
		display: block;
		width: 42px;
		height: 42px;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: var(--color-primary);
		}
	}

	& > span {
		flex: 1;
		padding-left: 10px;
		font-size: 14px;
		color: var(--color-text-2);
		font-weight: 400;
	}
`

const ArchiveLink = styled(Link)`
	display: flex;
	align-items: center;
	height: 44px;
	padding: 0 8px;
	text-decoration: none;
	transition: background 0.2s ease;

	&:hover {
		background: var(--color-hover);
	}

	em {
		width: 60px;
		text-align: right;
		color: var(--color-text-2);
		font-size: 13px;
		font-style: normal;
	}

	& > i {
		display: block;
		width: 42px;
		height: 42px;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: -4px;
			left: 50%;
			transform: translateX(-50%);
			width: 1px;
			height: 14px;
			background-color: var(--color-primary);
		}

		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background-color: var(--color-primary);
		}
	}

	& > span {
		flex: 1;
		padding-left: 4px;
		color: var(--color-text-1);
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	cite {
		font-style: normal;
		font-size: 12px;
		color: var(--color-accent);
		background: var(--color-bg-1);
		padding: 2px 8px;
		border-radius: 12px;
		white-space: nowrap;
	}
`
