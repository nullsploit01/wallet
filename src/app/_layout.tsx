import { Stack } from 'expo-router'
import { TamaguiProvider } from 'tamagui'

import appConfig from '@/tamagui.config'

export default function RootLayout() {
  return (
    <TamaguiProvider config={appConfig}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </TamaguiProvider>
  )
}
