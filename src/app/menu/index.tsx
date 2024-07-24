import { AntDesign } from '@expo/vector-icons'
import * as Application from 'expo-application'
import { router, Stack } from 'expo-router'
import React, { Fragment, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Card, Separator, Text, View, XStack } from 'tamagui'

import { Routes } from '@/src/constants/routes'
import { useNotification } from '@/src/hooks/notification'
import { storageService } from '@/src/services/storage'
import { useCardStore } from '@/src/stores/use-cards'

const MenuPage = () => {
  const { removeAllCards } = useCardStore()
  const { showNotification } = useNotification()

  const [_showWarning, setShowWarning] = useState(false)

  const clearData = () => {
    removeAllCards()
    storageService.clearAll()

    showNotification({
      title: 'Success',
      message: 'Cleared all data successfully',
      type: 'success'
    })
    router.navigate(Routes.Home.link)
  }

  return (
    <Fragment>
      <Stack.Screen
        options={{ headerTitle: 'Menu', headerStyle: { backgroundColor: '#F1F1F1' } }}
      />
      <View marginHorizontal="$3">
        <View marginVertical="$5">
          <TouchableOpacity onPress={() => setShowWarning(true)}>
            <XStack alignItems="center">
              <AntDesign name="warning" size={30} color="black" />
              <Text fontSize={20} marginLeft="$5">
                Clear Data
              </Text>
            </XStack>
          </TouchableOpacity>

          {_showWarning && (
            <Card elevate marginTop="$4">
              <View borderRadius="$2" borderColor="$gray2" borderWidth="$0.25" padding="$4">
                <Text theme="alt1">
                  This book and all its entries will be permanently deleted. Are you sure you want
                  to continue?
                </Text>
                <XStack justifyContent="space-between" marginTop="$2" gap="$3">
                  <XStack backgroundColor="$gray5" padding="$2" width="45%">
                    <TouchableOpacity
                      onPress={() => setShowWarning(false)}
                      style={{ width: '100%', alignItems: 'center' }}
                    >
                      <Text theme="surface3">No</Text>
                    </TouchableOpacity>
                  </XStack>
                  <XStack backgroundColor="$gray5" padding="$2" width="45%">
                    <TouchableOpacity
                      onPress={clearData}
                      style={{ width: '100%', alignItems: 'center' }}
                    >
                      <Text color="$red10" theme="surface3">
                        Yes
                      </Text>
                    </TouchableOpacity>
                  </XStack>
                </XStack>
              </View>
            </Card>
          )}
        </View>

        <Separator borderColor="$gray8Light" />
        <View justifyContent="flex-end" marginVertical="$5">
          <Text>Version {Application.nativeApplicationVersion}</Text>
        </View>
      </View>
    </Fragment>
  )
}

export default MenuPage
