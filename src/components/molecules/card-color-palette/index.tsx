import { router } from 'expo-router'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View, XStack } from 'tamagui'

import { CardColors } from '@/src/constants/card'
import { Routes } from '@/src/constants/routes'
import { useNotification } from '@/src/hooks/notification'
import { useCardStore } from '@/src/stores/use-cards'
import { ICardColorPaletteProps } from '@/src/types/components/molecules'

const CardColorPalette = ({ card }: ICardColorPaletteProps) => {
  const { editCard } = useCardStore()
  const { showNotification } = useNotification()

  const colors = CardColors[card.type]
  const [_activeColor, setActiveColor] = useState(colors.find((c) => c === card.color))

  const onCancelPress = () => {
    router.navigate({ pathname: Routes.Home.link, params: { type: card.type } })
  }

  const onSavePress = () => {
    if (_activeColor) {
      card.color = _activeColor
      editCard(card)
      showNotification({
        message: 'Card color updated successfully',
        type: 'success',
        title: 'Success'
      })
    }

    showNotification({
      message: 'Something went wrong, please try again',
      type: 'error',
      title: 'Error'
    })

    router.navigate({ pathname: Routes.Home.link, params: { type: card.type } })
  }

  return (
    <View>
      <XStack justifyContent="center" alignItems="center">
        {colors.map((color, idx) => {
          return (
            <TouchableOpacity key={idx} onPress={() => setActiveColor(color)}>
              <View
                width="$1.5"
                height="$1.5"
                borderRadius="$5"
                marginHorizontal="$3"
                backgroundColor={color}
                borderColor="$green10Dark"
                borderWidth={_activeColor === color ? '$1.5' : undefined}
              ></View>
            </TouchableOpacity>
          )
        })}
      </XStack>
      {_activeColor !== card.color && (
        <XStack justifyContent="space-between" marginTop="$2" gap="$5" margin="$5">
          <XStack backgroundColor="$gray5" padding="$2" width="45%">
            <TouchableOpacity
              onPress={onCancelPress}
              style={{ width: '100%', alignItems: 'center' }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </XStack>
          <XStack backgroundColor="$gray5" padding="$2" width="45%">
            <TouchableOpacity onPress={onSavePress} style={{ width: '100%', alignItems: 'center' }}>
              <Text color="$green9Dark">Save</Text>
            </TouchableOpacity>
          </XStack>
        </XStack>
      )}
    </View>
  )
}

export default CardColorPalette
