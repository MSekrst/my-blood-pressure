import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

import { colors } from '../styles'

const BaseButton = styled.View`
  background: ${colors.primary};
  padding: 16px;
`

const FloatingButtonView = styled(BaseButton)`
  border-radius: 50;
  position: absolute;
  bottom: 20;
  right: 20;
`

export const FloatingButton = ({ children, onPress, ...rest }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <FloatingButtonView {...rest}>{children}</FloatingButtonView>
  </TouchableWithoutFeedback>
)

const ButtonView = styled(BaseButton)`
  border-radius: 4;
  margin-top: 30px;
  padding: 12px;
  width: 80%;
`

const ButtonText = styled.Text`
  color: ${colors.secondary};
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`

export const Button = ({ children, onPress, ...rest }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <ButtonView {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonView>
  </TouchableWithoutFeedback>
)

export default BaseButton
