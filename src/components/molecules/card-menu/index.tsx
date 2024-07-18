import DialogBox from '../../atoms/dialog-box'
import CardForm from '../../organisms/card-form'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Fragment } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, Text, View, XStack } from 'tamagui'

import { useCardStore } from '@/src/stores/use-cards'
import { ICardMenuProps } from '@/src/types/components/molecules'
import { CardTypes } from '@/src/types/models/cards'

const CardMenu = ({ card }: ICardMenuProps) => {
  const { removeCard } = useCardStore()
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
