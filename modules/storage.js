import { AsyncStorage } from 'react-native'

let measureCount = 0

export const getMeasureId = () => {
  measureCount += 1

  return measureCount
}

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getData = async key => {
  try {
    return JSON.parse(await AsyncStorage.getItem(key))
  } catch (e) {
    console.error(e)
    return null
  }
}

// import { MEASURES_STORAGE_KEY } from '../const'

// AsyncStorage.removeItem(MEASURES_STORAGE_KEY)
