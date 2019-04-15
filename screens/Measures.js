import React from 'react'
import { Text, Button } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import AddMeasures from './AddMeasure'
import { FlexView } from '../components'

class Measures extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <FlexView>
        <Text>Measures</Text>
        <Button title="Add measure" onPress={() => this.props.navigation.navigate('AddMeasures')} />
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
