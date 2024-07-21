import { Stack } from 'expo-router'
import React, { Fragment } from 'react'
import { Text, View } from 'tamagui'

const MenuPage = () => {
  return (
    <Fragment>
      <Stack.Screen options={{ headerTitle: 'Menu' }} />
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>Yes! Menu Bitch!</Text>
      </View>
    </Fragment>
  )
}

export default MenuPage
