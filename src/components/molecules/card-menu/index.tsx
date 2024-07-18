import DialogBox from '../../atoms/dialog-box'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Fragment } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, Text, View, XStack } from 'tamagui'

import { useCardStore } from '@/src/stores/use-cards'
import { ICardMenuProps } from '@/src/types/components/molecules'

const CardMenu = ({ card }: ICardMenuProps) => {
  const { removeCard } = useCardStore()

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
        content={<Text>A</Text>}
        title="aa"
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
