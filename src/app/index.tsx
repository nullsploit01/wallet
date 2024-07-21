import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { Fragment } from 'react'
import { TouchableOpacity } from 'react-native'

import CardTabs from '@/src/components/organisms/card-tabs'
import { Routes } from '@/src/constants/routes'
import { CardTypes } from '@/src/types/models/cards'
import { getGreeting } from '@/src/utils/general'

const HomePage = () => {
  const { type } = useLocalSearchParams() as any

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    OswaldBold: require('@/src/assets/fonts/Oswald-Bold.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <Fragment>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: getGreeting(),
          headerRight: () => (
            <TouchableOpacity onPress={() => router.navigate(Routes.Menu.link)}>
              <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
          )
        }}
      />
      <CardTabs active={type !== undefined ? (type as CardTypes) : type} />
    </Fragment>
  )
}

export default HomePage
