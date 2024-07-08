import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'

import { NotificationProvider } from '@/src/ctx/notification'
import { encryptionService } from '@/src/services/encryption'
import { useCardStore } from '@/src/stores/use-cards'
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
    <NotificationProvider>
      <TamaguiProvider config={appConfig}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </TamaguiProvider>
    </NotificationProvider>
  )
}
