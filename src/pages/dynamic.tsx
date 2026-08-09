import styled from '@emotion/styled'
import SayCard from '@/components/widget/SayCard'

export default function Dynamic() {
	return (
		<DynamicContainer>
			<StyledNote>这里记录着我想记录的生活 ~</StyledNote>
			<SayCard
				status={{
					id: '1',
					user: {
						avatar: 'https://i.pravatar.cc/150?img=3',
						name: 'Jonty',
					},
					createdAt: '2025年02月20日 16:52:44 PM',
					content: '超炫的黑页：',
					link: 'https://nobb.cc/item/html/4hack/',
					deviceInfo: '🪟 Windows 11 / 🌐 Google Chrome',
				}}
			/>
			<SayCard
				status={{
					id: '1',
					user: {
						avatar: 'https://i.pravatar.cc/150?img=3',
						name: 'Jonty',
					},
					createdAt: '2025年02月20日 16:52:44 PM',
					content: '超炫的黑页：',
					link: 'https://nobb.cc/item/html/4hack/',
					deviceInfo: '🪟 Windows 11 / 🌐 Google Chrome',
				}}
			/>
		</DynamicContainer>
	)
}

const DynamicContainer = styled.div`
	padding-top: 32px;
`

const StyledNote = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	padding: 12px 16px;
	background: var(--color-bg-2);
	border-radius: 3px;
	color: var(--color-info);
	font-size: 16px;
	line-height: 1.5;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		width: 4px;
		height: 100%;
		background: linear-gradient(180deg, #c084fc, #a855f7);
	}
`
