import { css } from '@emotion/react'

import { main } from './main'
import { font } from './font'
import { mode } from './mode'

export { media } from './media'
export * from './animation'

export const globalStyles = css([main, font, mode])
