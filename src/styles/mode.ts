import { css } from '@emotion/react'
// f7f4ed
export const mode = css`
	:root,
	html[data-theme='light'] {
		--color-bg: #ffffff;
		--color-bg-1: #f0f7fa;
		--color-bg-2: #f8fafc;
		--color-bg-3: #f7f4ed;

		--color-border: #b2ebf2;
		--color-border-hover: #00acc1;
		--color-border-soft: #e5e7eb;

		--color-text: #263328;
		--color-text-1: #546e7a;
		--color-text-2: #90a4ae;
		--color-text-3: #d1d5db;

		--color-primary: #00acc1;
		--color-accent: #26c6da;

		--color-info: #26c6da;
		--color-success: #4dd0e1;
		--color-warning: #ffd54f;
		--color-error: #ef5350;

		--color-hover: #f3f4f6;
		--color-active: #eff6ff;

		color-scheme: only light;
	}

	html[data-theme='dark'] {
		--color-bg: #1f172a;
		--color-bg-1: #1e293b;
		--color-bg-2: #162032;
		--color-bg-3: #1e293b;

		--color-border: #164e63;
		--color-border-hover: #0e7490;
		--color-border-soft: #334155;

		--color-text: #e2e8f0;
		--color-text-1: #94a3b8;
		--color-text-2: #64748b;
		--color-text-3: #475569;

		--color-primary: #22d3ee;
		--color-accent: #67e8f9;

		--color-info: #22d3ee;
		--color-success: #5eead4;
		--color-warning: #fcd34d;
		--color-error: #f87171;

		--color-hover: #334155;
		--color-active: #0e7490;

		color-scheme: only dark;
	}
`
