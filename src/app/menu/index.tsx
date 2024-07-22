import { AntDesign } from '@expo/vector-icons'
import * as Application from 'expo-application'
import { Stack } from 'expo-router'
import React, { Fragment } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, Text, View, XStack } from 'tamagui'

const MenuPage = () => {
  return (
    <Fragment>
      <Stack.Screen options={{ headerTitle: 'Menu' }} />
      <View marginHorizontal="$3">
        <TouchableOpacity>
          <View marginVertical="$5">
            <XStack alignItems="center">
              <AntDesign name="warning" size={30} color="black" />
              <Text fontSize={20} marginLeft="$5">
                Clear Data
              </Text>
            </XStack>
          </View>
        </TouchableOpacity>

        <Separator borderColor="$gray8Light" />
        <View justifyContent="flex-end" marginVertical="$5">
          <Text>Version {Application.nativeApplicationVersion}</Text>
        </View>
      </View>
    </Fragment>
  )
}

export default MenuPage
