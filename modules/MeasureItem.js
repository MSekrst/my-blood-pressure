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

const EntryText = styled.Text`
  font-size: 18px;
`

export const MeasureItem = ({ timestamp, hearthRate, systolicPressure, diastolicPressure }) => {
  return (
    <Container>
      <EntryText style={{ fontSize: 15 }}>
        {`${getFormattedDateString(timestamp)} ${getFormattedTimeString(timestamp)}`}
      </EntryText>
      <EntryText style={{ fontSize: 20 }}>{`${systolicPressure}/${diastolicPressure}`}</EntryText>
      <EntryText>{hearthRate}</EntryText>
    </Container>
  )
}

export const MeasureItemHeader = () => (
  <Container>
    <EntryText>Date / Time</EntryText>
    <EntryText style={{ marginLeft: 64 }}>BP (mmHg)</EntryText>
    <EntryText>HR (bpm)</EntryText>
  </Container>
)
