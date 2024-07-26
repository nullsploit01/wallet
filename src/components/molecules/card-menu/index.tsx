import CardColorPalette from '../card-color-palette'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Fragment, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, Text, View, XStack } from 'tamagui'

import DialogBox from '@/src/components/atoms/dialog-box'
import CardForm from '@/src/components/organisms/card-form'
import { useCardStore } from '@/src/stores/use-cards'
import { ICardMenuProps } from '@/src/types/components/molecules'
import { CardTypes } from '@/src/types/models/cards'

const CardMenu = ({ card }: ICardMenuProps) => {
  const { removeCard } = useCardStore()
  const [_showColorPalette, setShowColorPalette] = useState(false)

  const cardType = card.type === CardTypes.Credit ? 'Credit' : 'Debit'

  const handleDeleteCard = () => {
    removeCard(card)
  }

  return (
    <View margin="$4" flex={1}>
      <DialogBox
        label={
          <Fragment>
            <XStack alignItems="center" marginVertical="$3">
              <AntDesign name="edit" size={36} color="black" />
              <Text fontSize={20} marginLeft="$5">
                Edit Card
              </Text>
            </XStack>
          </Fragment>
        }
        content={<CardForm type={card.type} isEdit card={card} />}
        title={`Edit ${cardType} Card`}
      />
      <Separator borderColor="$gray8Light" />
      <View marginVertical="$3">
        <TouchableOpacity onPress={() => setShowColorPalette(true)}>
          <XStack alignItems="center">
            <Ionicons name="color-palette" size={36} color="#27408B" />
            <Text fontSize={20} marginLeft="$5">
              Change Color
            </Text>
          </XStack>
        </TouchableOpacity>
        {_showColorPalette && (
          <View marginTop="$3">
            <CardColorPalette card={card} />
          </View>
        )}
      </View>
      <Separator borderColor="$gray8Light" />
      <TouchableOpacity onPress={handleDeleteCard}>
        <XStack alignItems="center" marginVertical="$3">
          <MaterialIcons name="delete" size={36} color="red" />
          <Text fontSize={20} marginLeft="$5">
            Delete Card
          </Text>
        </XStack>
      </TouchableOpacity>
    </View>
  )
}

export default CardMenu
