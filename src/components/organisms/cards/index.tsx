import CardDetails from '../../molecules/card-details'
import { ScrollView, View } from 'tamagui'

import DialogBox from '@/src/components/molecules/dialog-box'
import CardForm from '@/src/components/organisms/card-form'
import { useCardStore } from '@/src/stores/use-cards'
import { ICardsProps } from '@/src/types/components/organisms'
import { CardTypes } from '@/src/types/models/cards'

const Cards = ({ type }: ICardsProps) => {
  const { cards } = useCardStore()

  const cardType = type === CardTypes.Credit ? 'Credit' : 'Debit'

  return (
    <View flex={1} justifyContent="flex-start">
      <ScrollView>
        {cards.map((card) => {
          if (card.type === type) {
            return <CardDetails card={card} key={card.id} />
          }
        })}
      </ScrollView>
      <View position="absolute" bottom={0} right={0} width="30%" padding={10} margin={30}>
        <DialogBox
          label="Add Card"
          title={`Add ${cardType} Card`}
          content={<CardForm type={type} />}
        />
      </View>
    </View>
  )
}

export default Cards
