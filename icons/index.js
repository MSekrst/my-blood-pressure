import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '../styles'

const IconBase = ({ color = colors.text, size = 24, ...rest }) => <MaterialIcons color={color} size={size} {...rest} />

export const Measures = props => <IconBase name='list' {...props} />

export const Add = props => <IconBase name="add" {...props} />
