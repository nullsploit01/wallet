import { useFonts } from 'expo-font'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Fragment } from 'react'

import CardTabs from '@/src/components/organisms/card-tabs'
import { CardTypes } from '@/src/types/models/cards'

const HomePage = () => {
  const { type } = useLocalSearchParams() as any

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
      <CardTabs active={type !== undefined ? (type as CardTypes) : type} />
    </Fragment>
  )
}

export default HomePage
