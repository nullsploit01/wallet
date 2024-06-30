import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { Fragment } from 'react'

import CardTabs from '@/src/components/organisms/card-tabs'

const HomePage = () => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  })

  if (!loaded) {
    return null
  }

  return (
    <Fragment>
      <Stack.Screen options={{ headerShown: true, headerTitle: 'Hello!' }} />
      <CardTabs />
    </Fragment>
  )
}

export default HomePage
