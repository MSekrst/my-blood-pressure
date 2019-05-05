import React from 'react'
import { Dimensions, TouchableNativeFeedback, Alert, Text } from 'react-native'
import styled from 'styled-components/native'

import { colors } from '../styles'
import { getFormattedDateString, getFormattedTimeString } from '../utils'

const Container = styled.View`
  flex: 1 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: ${Dimensions.get('window').width - 16};
  /* margin: 8px; */
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.secondary};
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

const getMeasureColor = ({ systolicPressure, diastolicPressure }) => {
  let systolicValue = colors.measureColorCoding.fine

  if (systolicPressure <= 90) {
    systolicValue = colors.measureColorCoding.low
  } else if (systolicPressure > 120 && systolicPressure < 140) {
    systolicValue = colors.measureColorCoding.slightHigh
  } else if (systolicPressure >= 140) {
    systolicValue = colors.measureColorCoding.high
  }

  let diastolicValue = colors.measureColorCoding.fine

  if (diastolicPressure <= 60) {
    diastolicValue = colors.measureColorCoding.low
  } else if (diastolicPressure > 80 && diastolicPressure < 90) {
    diastolicValue = colors.measureColorCoding.slightHigh
  } else if (diastolicPressure >= 90) {
    diastolicValue = colors.measureColorCoding.high
  }

  return { systolicValue, diastolicValue }
}

export const MeasureItem = ({
  timestamp,
  heartRate,
  systolicPressure,
  diastolicPressure,
  id,
  onDeletePress,
}) => {
  const { diastolicValue, systolicValue } = getMeasureColor({ systolicPressure, diastolicPressure })

  return (
    <TouchableNativeFeedback
      style={{ flex: 1 }}
      onLongPress={() => {
        Alert.alert('Delete', 'Do you want to delete selected measure?', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', onPress: () => onDeletePress(id), style: 'positive' },
        ])
      }}
    >
      <Container>
        <Wrapper>
          <EntryText style={{ minWidth: DATE_WIDTH, fontSize: 15 }}>{`${getFormattedDateString(timestamp)}`}</EntryText>
          <EntryText style={{ minWidth: TIME_WIDTH, fontSize: 15, marginLeft: 16 }}>
            {`${getFormattedTimeString(timestamp)}`}
          </EntryText>
        </Wrapper>
        <Wrapper style={{ justifyContent: 'flex-end' }}>
          <EntryText style={{ minWidth: MEASURE_WIDTH, fontSize: 20 }}>
            <Text style={{ color: systolicValue }}>{systolicPressure}</Text>
            <Text>/</Text>
            <Text style={{ color: diastolicValue }}>{diastolicPressure}</Text>
            {/* {`${systolicPressure}/${diastolicPressure}`} */}
          </EntryText>
          <EntryText style={{ minWidth: HR_WIDTH, marginLeft: 16 }}>{heartRate}</EntryText>
        </Wrapper>
      </Container>
    </TouchableNativeFeedback>
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
