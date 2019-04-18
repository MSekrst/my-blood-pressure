import React from 'react'
import { Text } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import AddMeasures from './AddMeasure'
import { FlexView, FloatingButton } from '../components'
import * as I from '../icons'

class Measures extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <FlexView>
        <Text>Measures</Text>
        <FloatingButton onPress={() => this.props.navigation.navigate('AddMeasures')}>
          <I.Add />
        </FloatingButton>
      </FlexView>
    )
  }
}

export default createAppContainer(
  createStackNavigator(
    {
      Measures,
      AddMeasures: {
        title: 'Add Measure',
        screen: AddMeasures,
      },
    },
    { mode: 'modal', headerMode: 'float' }
  )
)
