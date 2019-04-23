import React from 'react'
import { Text, StatusBar, ScrollView } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { FlexView, FloatingButton } from '../components'
import * as I from '../icons'
import { MEASURES_STORAGE_KEY } from '../const'
import { getData, MeasureItem, MeasureItemHeader } from '../modules'

import AddMeasures from './AddMeasure'

class Measures extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = { measures: [] }

  willFocusSubscription = null

  async componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
      this.getMeasures()
    })
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove()
  }

  getMeasures = async () => {
    const measures = await getData(MEASURES_STORAGE_KEY)

    this.setState({ measures })
  }

  render() {
    const { measures } = this.state

    return (
      <FlexView style={{ marginTop: StatusBar.currentHeight }}>
        <Text>All Measures</Text>
        <ScrollView>
          {measures.length > 0 && <MeasureItemHeader />}
          {measures.map(measure => (
            <MeasureItem key={measure.timestamp} {...measure} />
          ))}
        </ScrollView>
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
