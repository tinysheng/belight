import styled from '@emotion/styled'
import Surface from '@/components/ui/Surface'
export default function TocBlock() {
	return (
		<Toc label="Toc">
			<ul>
				<li>
					<a href="#toc">目次</a>
				</li>
			</ul>
		</Toc>
	)
}

const Toc = styled(Surface)`
	display: none;
	min-height: 300px;

	[data-mode='cont'] & {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
`
