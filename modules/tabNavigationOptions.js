import React from 'react'
// import { Text } from 'react-native'

import * as Icons from '../icons'

// map of icons for each tab
const iconsMap = {
  Measures: Icons.Measures,
}

const TabBarIcon = ({ routeName, tintColor }) => {
  const Icon = iconsMap[routeName]

  return <Icon color={tintColor} />
}

export const navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => <TabBarIcon tintColor={tintColor} routeName={navigation.state.routeName} />,
})
