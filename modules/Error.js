import { Alert } from 'react-native'

export const showError = (message = 'Something went wrong') => Alert.alert(message)
