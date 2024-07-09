import { Stack } from 'expo-router'
import { Fragment, useEffect, useState } from 'react'
import { TamaguiProvider, Text } from 'tamagui'

import Authenticate from '@/src/components/organisms/authenticate'
import { NotificationProvider } from '@/src/ctx/notification'
import { authenticationService } from '@/src/services/authentication'
import { encryptionService } from '@/src/services/encryption'
import { useCardStore } from '@/src/stores/use-cards'
import appConfig from '@/tamagui.config'

export default function RootLayout() {
  const [_canAuthenticate, setCanAuthenticate] = useState({
    isSupported: true,
    isSuccess: false
  })

  const { getCardsFromStorage } = useCardStore()

  useEffect(() => {
    initialiseApplication()
  }, [])

  useEffect(() => {
    if (_canAuthenticate.isSupported && _canAuthenticate.isSuccess) {
      encryptionService.setEncryptionKey().then(() => {
        getCardsFromStorage()
      })
    }
  }, [_canAuthenticate])

  const initialiseApplication = async () => {
    const canAuthenticate = await authenticationService.isDeviceSupported()
    setCanAuthenticate((prev) => ({ ...prev, isSupported: canAuthenticate }))

    if (canAuthenticate) {
      const isAuthenticated = await authenticationService.authenticate()
      setCanAuthenticate((prev) => ({ ...prev, isSuccess: isAuthenticated }))
    }
  }

  return (
    <Fragment>
      <NotificationProvider>
        <TamaguiProvider config={appConfig}>
          {!_canAuthenticate.isSupported ? (
            <Text>Device Not Suported</Text>
          ) : !_canAuthenticate.isSuccess ? (
            <Authenticate initialiseApplication={initialiseApplication} />
          ) : (
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
          )}
        </TamaguiProvider>
      </NotificationProvider>
    </Fragment>
  )
}
