import styled from '@emotion/styled'
import DOMPurify from 'dompurify'

interface ContentProps {
	content: string
}

export default function Content({ content }: ContentProps) {
	return (
		<ContentArea
			dangerouslySetInnerHTML={{
				__html: DOMPurify.sanitize(content),
			}}
		/>
	)
}

const ContentArea = styled.article`
	border-radius: var(--radius-md);
	padding: 16px;
	line-height: 1.8;
	color: var(--color-text);
	font-size: 15px;
	width: 100%;
	min-width: 0;
	box-sizing: border-box;

	/* 标题层级 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 32px 0 16px;
		color: var(--color-text);
		line-height: 1.4;
		font-weight: 600;
	}

	h1 {
		font-size: 26px;
		padding-bottom: 12px;
		border-bottom: 1px solid #e5e5e5;
	}

	h2 {
		font-size: 22px;
		padding-bottom: 8px;
		border-bottom: 1px solid #eee;
	}

	h3 {
		font-size: 19px;
	}
	h4 {
		font-size: 17px;
	}
	h5 {
		font-size: 15px;
	}
	h6 {
		font-size: 14px;
		color: #666;
	}

	/* 段落 */
	p {
		margin: 14px 0;
	}

	/* 链接 */
	a {
		color: var(--primary-color);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-color 0.2s ease;

		&:hover {
			border-bottom-color: var(--primary-color);
		}
	}

	/* 列表 */
	ul,
	ol {
		padding-left: 28px;
		margin: 14px 0;
	}

	ul {
		list-style: disc;
	}
	ol {
		list-style: decimal;
	}

	li {
		margin: 6px 0;
	}

	/* 代码块 */
	pre {
		background: var(--color-bg-3);
		padding: 16px;
		border-radius: var(--radius-sm);
		font-size: 13px;
		line-height: 1.6;
		overflow-x: auto;
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
		white-space: pre;
		word-wrap: normal;
		min-width: 0;
	}

	code {
		background: var(--color-bg-3);
		padding: 2px 6px;
		border-radius: 4px;
		font-size: 13px;
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
	}

	pre code {
		background: none;
		padding: 0;
		white-space: pre;
		display: block;
	}

	/* 引用 */
	blockquote {
		margin: 16px 0;
		padding: 12px 16px;
		border-left: 4px solid var(--primary-color);
		background: var(--color-bg-3);
		color: var(--color-text-2);
	}

	/* 图片 */
	img {
		max-width: 100%;
		border-radius: var(--radius-sm);
	}

	/* 表格 */
	table {
		width: 100%;
		border-collapse: collapse;
		margin: 16px 0;
		font-size: 14px;
	}

	th,
	td {
		padding: 10px 12px;
		border: 1px solid #e5e7eb;
		text-align: left;
	}

	th {
		background: #f8f9fa;
		font-weight: 600;
	}

	/* 分割线 */
	hr {
		border: none;
		border-top: 1px solid #e5e7eb;
		margin: 24px 0;
	}
`
