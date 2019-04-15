import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import { Measures } from './screens'
import { navigationOptions } from './modules'
import { colors } from './styles'

// tabs map with route name and according screen
const tabs = {
  Measures,
}

export default createAppContainer(
  createBottomTabNavigator(tabs, {
    defaultNavigationOptions: navigationOptions,
    tabBarOptions: {
      activeTintColor: colors.active,
      inactiveTintColor: colors.base,
    },
  })
)
