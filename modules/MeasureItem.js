import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { colors } from '../styles'
import { getFormattedDateString, getFormattedTimeString } from '../utils'

const Container = styled.View`
  flex: 1 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: ${Dimensions.get('window').width - 16};
  margin: 8px;
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primary};
`

const Wrapper = styled.View`
  flex: 1 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const EntryText = styled.Text`
  font-size: 18px;
`

export const MeasureItem = ({ timestamp, heartRate, hearthRate, systolicPressure, diastolicPressure }) => {
  // TODO: color coding
  return (
    <Container>
      <Wrapper>
        <EntryText style={{ fontSize: 15 }}>{`${getFormattedDateString(timestamp)}`}</EntryText>
        <EntryText style={{ fontSize: 15, marginLeft: 8 }}>{`${getFormattedTimeString(timestamp)}`}</EntryText>
      </Wrapper>
      <Wrapper style={{ justifyContent: 'flex-end' }}>
        <EntryText style={{ fontSize: 20 }}>{`${systolicPressure}/${diastolicPressure}`}</EntryText>
        <EntryText style={{ marginLeft: 16 }}>{heartRate || hearthRate}</EntryText>
      </Wrapper>
    </Container>
  )
}

export const MeasureItemHeader = () => (
  <Container>
    <Wrapper>
      <EntryText>Date</EntryText>
      <EntryText style={{ marginLeft: 8 }}>Time</EntryText>
    </Wrapper>
    <Wrapper style={{ justifyContent: 'flex-end' }}>
      <EntryText>Pressure</EntryText>
      <EntryText style={{ marginLeft: 16 }}>HR</EntryText>
    </Wrapper>
  </Container>
)
