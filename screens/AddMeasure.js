import React from 'react'
import { KeyboardAvoidingView, Image } from 'react-native'

import { NumberInput, FlexView, Button } from '../components'
import { getData, storeData } from '../modules'
import { MEASURES_STORAGE_KEY, HEADER_NAVIGATION_HEIGHT } from '../const'
import { colors } from '../styles'
import logo from '../assets/logo.png'

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

  setHearthRate = hearthRate => this.setState({ hearthRate })

  saveMeasure = async () => {
    // TODO: add validation

    const measures = (await getData(MEASURES_STORAGE_KEY)) || []

    const measureWithMetadata = { ...this.state, timestamp: Date.now() }

    measures.push(measureWithMetadata)

    const res = await storeData(MEASURES_STORAGE_KEY, measures)

    if (res) {
      const { navigation } = this.props
      navigation.goBack()
    } else {
      // TODO: show error toast
      console.error('Saving failed!')
    }
  }

  render() {
    const { systolicPressure, diastolicPressure, hearthRate } = this.state

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={HEADER_NAVIGATION_HEIGHT + 50}
      >
        <FlexView>
          <Image style={{ width: 100, height: 100, marginBottom: 25 }} source={logo} />
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
            value={hearthRate}
            onChangeText={this.setHearthRate}
            onSubmitEditing={this.saveMeasure}
          />
          <Button onPress={this.saveMeasure}>Save</Button>
        </FlexView>
      </KeyboardAvoidingView>
    )
  }
}

export default AddMeasure
