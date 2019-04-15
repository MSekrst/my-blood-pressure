import React from 'react'
import styled from 'styled-components/native'

import { colors } from '../styles'

const InputView = styled.View`
  width: 80%;
  margin: 8px;
`

const Label = styled.Text`
  color: ${colors.text};
`

const BaseInput = styled.TextInput`
  width: 100%;
  color: ${colors.text};
  padding: 8px 16px;
  border: 1px solid ${colors.base};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 2px;
`

export const NumberInput = React.forwardRef(({ label, ...rest }, ref) => (
  <InputView>
    {label && <Label>{label}</Label>}
    <BaseInput ref={ref} keyboardType="numeric" {...rest} />
  </InputView>
))
