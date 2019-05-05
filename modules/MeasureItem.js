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

const DATE_WIDTH = 80
const TIME_WIDTH = 50
const MEASURE_WIDTH = 75
const HR_WIDTH = 30

/*

DATE | TIME | MEASURE | HR
80px | 50px | 75px    | 30px

*/

export const MeasureItem = ({ timestamp, heartRate, hearthRate, systolicPressure, diastolicPressure }) => {
  // TODO: color coding
  return (
    <Container>
      <Wrapper>
        <EntryText style={{ minWidth: DATE_WIDTH, fontSize: 15 }}>{`${getFormattedDateString(timestamp)}`}</EntryText>
        <EntryText style={{ minWidth: TIME_WIDTH, fontSize: 15, marginLeft: 16 }}>
          {`${getFormattedTimeString(timestamp)}`}
        </EntryText>
      </Wrapper>
      <Wrapper style={{ justifyContent: 'flex-end' }}>
        <EntryText style={{ minWidth: MEASURE_WIDTH, fontSize: 20 }}>
          {`${systolicPressure}/${diastolicPressure}`}
        </EntryText>
        <EntryText style={{ minWidth: HR_WIDTH, marginLeft: 16 }}>{heartRate || hearthRate}</EntryText>
      </Wrapper>
    </Container>
  )
}

export const MeasureItemHeader = () => (
  <Container>
    <Wrapper>
      <EntryText style={{ minWidth: DATE_WIDTH }}>Date</EntryText>
      <EntryText style={{ minWidth: TIME_WIDTH, marginLeft: 8 }}>Time</EntryText>
    </Wrapper>
    <Wrapper style={{ justifyContent: 'flex-end' }}>
      <EntryText style={{ minWidth: MEASURE_WIDTH }}>Pressure</EntryText>
      <EntryText style={{ minWidth: HR_WIDTH, marginLeft: 16 }}>HR</EntryText>
    </Wrapper>
  </Container>
)
