import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useArchives } from '@/hooks/useArchives'
import Loading from '@/components/ui/Loading'

export default function Archives() {
	const { archives, loading } = useArchives()

	if (loading && archives.length === 0) return <Loading />

	return (
		<ArchiveContainer>
			{archives.map((yearGroup) => (
				<ArchiveYearSection key={yearGroup.year}>
					<ArchiveTitle>
						<em>{yearGroup.year}</em>
						<i></i>
						<span>—— {yearGroup.count}篇文章</span>
					</ArchiveTitle>
					{yearGroup.list.map((item) => (
						<ArchiveLink key={item.id} to={`/posts/${item.slug}`}>
							<em>{item.createdAt}</em>
							<i></i>
							<span>{item.title}</span>
							<cite>{item.tags.map((t) => `#${t}`).join(' ')}</cite>
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
