import React from 'react'

import { colors } from '../styles'

const IconBase = (color = colors.text, size = 24, children, ...rest) => (
  <svg height={size} width={size} fill={color} viewBox='0 0 24 24' {...rest}>
    {children}
  </svg>
)

export const Add = (
  <IconBase>
    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </IconBase>
)

export const List = (
  <IconBase>
    <path d='M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </IconBase>
)
