import React from 'react'

import { tabNavigatorScreens } from '../../config/routes'
import * as Icons from '../../icons'

const navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => <TabBarIcon tintColor={tintColor} routeName={navigation.state.routeName} />,
})

const TabBarIcon = ({ routeName, tintColor }) => {
  const { icon } = tabNavigatorScreens[routeName]
  const Icon = Icons[icon]

  return <Icon color={tintColor} />
}

export default navigationOptions
