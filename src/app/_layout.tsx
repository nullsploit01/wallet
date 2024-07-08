import { useCardStore } from '../stores/use-cards'
import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'

import { encryptionService } from '@/src/services/encryption'
import appConfig from '@/tamagui.config'

export default function RootLayout() {
  const { getCardsFromStorage } = useCardStore()

  useEffect(() => {
    initialiseApplication()
  }, [])

  const initialiseApplication = async () => {
    await encryptionService.setEncryptionKey()
    await getCardsFromStorage()
  }

  return (
    <TamaguiProvider config={appConfig}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </TamaguiProvider>
  )
}
