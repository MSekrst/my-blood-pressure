import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import { tabNavigatorScreens, DEFAULT_SCREEN } from './config/routes'
import * as screens from './screens'
import navigationOptions from './modules'
import { colors } from './styles'

// tabs map with route name and according screen
const tabs = {}

Object.keys(tabNavigatorScreens).forEach(screenKey => {
  const { name } = tabNavigatorScreens[screenKey]

  // TODO: add check if screen exists to aviod broken navigation
  tabs[name] = screens[name]
})

// throw if no screens provided

let App

// if only one screen avoid tab navigation
if (Object.keys(tabs).length > 1) {
  App = createAppContainer(
    createBottomTabNavigator(tabs, {
      defaultNavigationOptions: navigationOptions,
      tabBarOptions: {
        activeTintColor: colors.active,
        inactiveTintColor: colors.base,
      },
    })
  )
} else {
  App = screens[DEFAULT_SCREEN.name]
}

export default App
