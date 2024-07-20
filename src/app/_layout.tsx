import { Stack } from 'expo-router'
import { usePreventScreenCapture } from 'expo-screen-capture'
import { Fragment, useEffect, useState } from 'react'
import { PortalProvider, TamaguiProvider, Text, View } from 'tamagui'

import Authenticate from '@/src/components/organisms/authenticate'
import { NotificationProvider } from '@/src/ctx/notification'
import { authenticationService } from '@/src/services/authentication'
import { encryptionService } from '@/src/services/encryption'
import { useCardStore } from '@/src/stores/use-cards'
import appConfig from '@/tamagui.config'

export default function RootLayout() {
  usePreventScreenCapture()

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
          <PortalProvider shouldAddRootHost>
            {!_canAuthenticate.isSupported ? (
              <View flex={1} justifyContent="center" alignItems="center">
                <Text>Device Not Suported</Text>
              </View>
            ) : !_canAuthenticate.isSuccess ? (
              <Authenticate initialiseApplication={initialiseApplication} />
            ) : (
              <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
              </Stack>
            )}
          </PortalProvider>
        </TamaguiProvider>
      </NotificationProvider>
    </Fragment>
  )
}
