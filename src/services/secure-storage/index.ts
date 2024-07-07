import * as SecureStore from 'expo-secure-store'

class SecureStorageService {
  storeItem = async (key: string, value: Record<string, any>) => {
    const serialisedValue = JSON.stringify(value)
    await SecureStore.setItemAsync(key, serialisedValue)
  }

  getItem = async (key: string) => {
    try {
      const value = await SecureStore.getItemAsync(key)
      if (!value) return null

      return JSON.parse(value)
    } catch {
      return null
    }
  }
}

export const secureStorageService = new SecureStorageService()
