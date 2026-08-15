import styled from '@emotion/styled'
import { useConfig } from '@/hooks/useConfig'
import { useLinks } from '@/hooks/useLinks'
import Loading from '@/components/ui/Loading'

export default function FriendsLink() {
	const { links, loading } = useLinks()
	const { config } = useConfig()

	if (loading && links.length === 0) return <Loading />

	return (
		<Container>
			<Section>
				<SectionTitle>友情链接</SectionTitle>
				<Tips>以下是本站的友情链接，排名不分先后：</Tips>
				<Grid>
					{links.map((link) => (
						<Card key={link.id} href={link.link} target="_blank" rel="noreferrer">
							<Avatar>
								<img src={link.icon} alt={link.author} />
							</Avatar>
							<Info>
								<strong>{link.title}</strong>
								<p>{link.intro}</p>
							</Info>
						</Card>
					))}
				</Grid>
			</Section>

			<Section>
				<SectionTitle>本站信息</SectionTitle>
				<SiteInfo>
					<li>
						<Label>名称：</Label> {config?.Title || 'Belight'}
					</li>
					<li>
						<Label>简介：</Label> {config?.Subtitle || '记录生活与技术'}
					</li>
					<li>
						<Label>网址：</Label>
						<a href={config?.Site || '#'} target="_blank" rel="noreferrer">
							{config?.Site || 'https://example.com'}
						</a>
					</li>
					<li>
						<Label>头像：</Label>
						<a href={config?.Avatar || '#'} target="_blank" rel="noreferrer">
							{config?.Avatar || '点击查看'}
						</a>
					</li>
				</SiteInfo>
			</Section>

			<Section>
				<SectionTitle>申请须知</SectionTitle>
				<ApplyRules>
					<li>请先添加本站友链后再申请友链，并通过留言或邮件告知</li>
					<li>不和商业、政治、无实质内容的网站交换，优先和具有原创作品的全站 HTTPS 站点交换</li>
					<li>原则上要求您的博客主页有较固定内容且已被 Google 等搜索引擎收录</li>
					<li>由于访问安全性问题，请务必提供 HTTPS 链接的头像地址（或留言时备注暂无无碍本站主动保存）</li>
					<li>不接受短站、资源站等非博客类站点交换，原则上只与技术/日志类博客交换友链</li>
				</ApplyRules>
			</Section>
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	padding-top: 32px;
`

const Section = styled.section`
	margin-bottom: 40px;

	&:last-child {
		margin-bottom: 0;
	}
`

const SectionTitle = styled.h2`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 16px;
	color: var(--color-text);
	padding-bottom: 8px;
	border-bottom: 1px solid var(--color-border);
`

const Tips = styled.p`
	color: var(--color-text-2);
	margin-bottom: 20px;
	font-size: 14px;
`

const SiteInfo = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	li {
		margin-bottom: 12px;
		color: var(--color-text-1);
		font-size: 14px;

		a {
			color: var(--primary-color);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`

const Label = styled.span`
	display: inline-block;
	width: 60px;
	color: var(--color-text-2);
`

const ApplyRules = styled.ul`
	padding-left: 20px;
	margin: 0;

	li {
		margin-bottom: 10px;
		color: var(--color-text-1);
		font-size: 14px;
		line-height: 1.6;
	}
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 16px;
`

const Card = styled.a`
	display: flex;
	align-items: center;
	gap: 14px;
	padding: 16px;
	background: var(--color-bg-1);
	border-radius: var(--radius-md);
	border: 1px solid var(--color-border);
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		border-color: var(--primary-color);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
		transform: translateY(-2px);
	}
`

const Avatar = styled.div`
	flex-shrink: 0;
	width: 44px;
	height: 44px;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}
`

const Info = styled.div`
	flex: 1;
	min-width: 0;

	strong {
		display: block;
		color: var(--color-text-1);
		font-weight: 600;
		font-size: 14px;
		margin-bottom: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	p {
		color: var(--color-text-2);
		font-size: 13px;
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`
