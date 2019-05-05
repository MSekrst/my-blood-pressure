import React from 'react'
import { StatusBar, ScrollView, ActivityIndicator, Text } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import styled from 'styled-components/native'

import { FlexView, FloatingButton, Button } from '../components'
import * as I from '../icons'
import { MEASURES_STORAGE_KEY } from '../const'
import { getData, MeasureItem, MeasureItemHeader } from '../modules'
import { colors } from '../styles'

import AddMeasures from './AddMeasure'

const Heading = styled.Text`
  font-size: 25px;
  color: ${colors.primary};
  padding: 12px;
`

class Measures extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {}

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
        <Heading style={{}}>All Measures</Heading>
        {!measures && <ActivityIndicator style={{ flex: 1 }} size="large" color={colors.primary} />}
        {measures && (
          <>
            {measures.length > 0 && (
              <>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                  {measures.length > 0 && <MeasureItemHeader />}
                  {measures.map(measure => (
                    <MeasureItem key={measure.timestamp} {...measure} />
                  ))}
                </ScrollView>
                <FloatingButton onPress={() => this.props.navigation.navigate('AddMeasures')}>
                  <I.Add />
                </FloatingButton>
              </>
            )}
            {!measures.length && (
              <FlexView>
                <Text style={{ fontSize: 18 }}>No measures recorded</Text>
                <Button style={{ width: 190 }} onPress={() => this.props.navigation.navigate('AddMeasures')}>
                  Enter measure
                </Button>
              </FlexView>
            )}
          </>
        )}
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
