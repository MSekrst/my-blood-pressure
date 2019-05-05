import { AsyncStorage } from 'react-native'

import { MEASURES_STORAGE_KEY } from '../const'

let latestId = 0

export const getMeasureId = () => {
  latestId += 1

  return latestId
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

const setId = async () => {
  const measures = (await getData(MEASURES_STORAGE_KEY)) || []

  measures.forEach(m => {
    if (m.id > latestId) {
      latestId = m.id
    }
  })
}

// set current id
setId()

// AsyncStorage.removeItem(MEASURES_STORAGE_KEY)
