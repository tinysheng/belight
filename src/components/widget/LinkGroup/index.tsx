import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Button from './Button'

const socialLinks = [
	{ name: 'GitHub', url: 'https://github.com' },
	{ name: 'Twitter', url: 'https://twitter.com' },
	{ name: 'RSS', url: '/rss' },
]

export default function LinkGroup() {
	return (
		<LinkGroupContainer>
			{/* 			<SocialRow>
				{socialLinks.map((link) => (
					<SocialTag key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
						{link.name}
					</SocialTag>
				))}
			</SocialRow> */}
			{/* <Button /> */}
		</LinkGroupContainer>
	)
}

const LinkGroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	opacity: 0;
	scale: 0.8;
	transform: translate(0, -50%);

	animation: link-show 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
	animation-delay: 1000ms;

	@keyframes link-show {
		to {
			opacity: 1;
			scale: 1;
			transform: translate(0, 0);
		}
	}
`

const SocialRow = styled.div`
	display: flex;
	gap: 8px;
	justify-content: center;
`

const SocialTag = styled.a`
	font-size: 12px;
	color: #6b7280;
	background: #f3f4f6;
	padding: 4px 10px;
	border-radius: 12px;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		color: var(--primary-color, #4a90d9);
		background: #eff6ff;
	}
`
