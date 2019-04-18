import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native'
import styled from 'styled-components/native'

import { colors } from '../styles'

const BaseButton = styled.View`
  background: ${colors.primary};
  padding: 16px;
`

const FloatingButtonView = styled(BaseButton)`
  border-radius: 50;
`

export const FloatingButton = ({ children, onPress, ...rest }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <FloatingButtonView {...rest}>{children}</FloatingButtonView>
  </TouchableWithoutFeedback>
)

const ButtonView = styled(BaseButton)`
  border-radius: 4;
  margin-top: 25;
  width: 80%;
`

const ButtonText = styled.Text`
  color: ${colors.secondary};
  font-size: 15px;
  font-weight: 500;
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
