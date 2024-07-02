import { ScrollView, View } from 'tamagui'

import DialogBox from '@/src/components/molecules/dialog-box'
import CardForm from '@/src/components/organisms/card-form'
import { ICardsProps } from '@/src/types/components/organisms'

const Cards = ({ type }: ICardsProps) => {
  return (
    <View flex={1} justifyContent="flex-start">
      <ScrollView></ScrollView>
      <View position="absolute" bottom={0} right={0} width="30%" padding={10} margin={30}>
        <DialogBox label="Add Card" title="Add Card" content={<CardForm type={type} />} />
      </View>
    </View>
  )
}

export default Cards
