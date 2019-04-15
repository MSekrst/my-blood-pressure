import { Dimensions } from 'react-native'
import { Header } from 'react-navigation'

export const HEADER_NAVIGATION_HEIGHT = Header.HEIGHT
export const TABS_NAVIGATION_HEIGHT = 49.1

export const SCREEN_WITH_HEADER_TABS_HEIGHT =
  Dimensions.get('window').height - HEADER_NAVIGATION_HEIGHT - TABS_NAVIGATION_HEIGHT
