import React from 'react'
import { Button, Text, View } from 'react-native'

import { NumberInput, FlexView } from '../components'
import { getData, storeData, KeyboardView } from '../modules'
import { MEASURES_STORAGE_KEY, SCREEN_WITH_HEADER_TABS_HEIGHT, HEADER_NAVIGATION_HEIGHT } from '../const'

class AddMeasure extends React.Component {
  static navigationOptions = {
    headerTitle: 'Add measure',
    headerTitleStyle: { width: 200 },
  }

  constructor(props) {
    super(props)

    this.state = {}

    this.secondInput = React.createRef()
    this.thirdInput = React.createRef()
  }

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
      <KeyboardView>
        {screenBottom => (
          <View
            style={{
              backgroundColor: 'red',
              height: screenBottom ? screenBottom - HEADER_NAVIGATION_HEIGHT : SCREEN_WITH_HEADER_TABS_HEIGHT,
            }}
          >
            <Text>{String(screenBottom || SCREEN_WITH_HEADER_TABS_HEIGHT)}</Text>
            <FlexView>
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
              <Button title="Save" onPress={this.saveMeasure} />
            </FlexView>
          </View>
        )}
      </KeyboardView>
    )
  }
}

export default AddMeasure
