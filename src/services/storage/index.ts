import AsyncStorage from '@react-native-async-storage/async-storage'

class StorageService {
  storeItem = async (key: string, value: Record<string, any>) => {
    const serialisedValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, serialisedValue)
  }

  getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (!value) return null

      return JSON.parse(value)
    } catch {
      return null
    }
  }
}

export const storageService = new StorageService()
