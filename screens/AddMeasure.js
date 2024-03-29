import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'

import { NumberInput, FlexView, Button } from '../components'
import { MEASURES_STORAGE_KEY, HEADER_NAVIGATION_HEIGHT } from '../const'
import { getData, storeData, getMeasureId, showError } from '../modules'
import { colors } from '../styles'
import logo from '../assets/logo.png'

const SquareImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 25px;
`

const areMeasuresValid = ({ systolicPressure = 0, diastolicPressure = 0, heartRate = 0 }) => {
  return (
    systolicPressure > 0 &&
    systolicPressure < 500 &&
    diastolicPressure > 0 &&
    diastolicPressure < 500 &&
    heartRate > 0 &&
    heartRate < 500
  )
}

class AddMeasure extends React.Component {
  static navigationOptions = {
    headerTitle: 'Add measure',
    headerTitleStyle: { width: 200, color: colors.primary },
  }

  state = {}

  secondInput = React.createRef()

  thirdInput = React.createRef()

  setSystolicPressure = systolicPressure => this.setState({ systolicPressure })

  setDiastolicPressure = diastolicPressure => this.setState({ diastolicPressure })

  setHeartRate = heartRate => this.setState({ heartRate })

  saveMeasure = async () => {
    const measures = (await getData(MEASURES_STORAGE_KEY)) || []

    if (!areMeasuresValid(this.state)) {
      showError('Invalid measures data')
      return
    }

    const measureWithMetadata = { ...this.state, timestamp: Date.now(), id: getMeasureId() }

    measures.push(measureWithMetadata)

    const res = await storeData(MEASURES_STORAGE_KEY, measures)

    if (res) {
      const { navigation } = this.props
      navigation.goBack()
    } else {
      showError('Saving of measures failed')
    }
  }

  render() {
    const { systolicPressure, diastolicPressure, heartRate } = this.state

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={HEADER_NAVIGATION_HEIGHT + 50}
      >
        <FlexView>
          <SquareImage source={logo} />
          <NumberInput
            autoFocus
            blurOnSubmit={false}
            returnKeyType="next"
            label="Systolic pressure"
            placeholder="120"
            value={systolicPressure}
            onChangeText={this.setSystolicPressure}
            onSubmitEditing={() => this.secondInput.current && this.secondInput.current.focus()}
          />
          <NumberInput
            ref={this.secondInput}
            blurOnSubmit={false}
            returnKeyType="next"
            label="Diastolic pressure"
            placeholder="80"
            value={diastolicPressure}
            onChangeText={this.setDiastolicPressure}
            onSubmitEditing={() => this.thirdInput.current && this.thirdInput.current.focus()}
          />
          <NumberInput
            ref={this.thirdInput}
            label="Hearth rate"
            placeholder="60"
            value={heartRate}
            onChangeText={this.setHeartRate}
            onSubmitEditing={this.saveMeasure}
          />
          <Button onPress={this.saveMeasure}>Save</Button>
        </FlexView>
      </KeyboardAvoidingView>
    )
  }
}

export default AddMeasure
