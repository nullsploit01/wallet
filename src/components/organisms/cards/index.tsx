import { ScrollView, View } from 'tamagui'

import DialogBox from '@/src/components/atoms/dialog-box'
import CardDetails from '@/src/components/molecules/card-details'
import NoCards from '@/src/components/molecules/no-cards'
import CardForm from '@/src/components/organisms/card-form'
import { useCardStore } from '@/src/stores/use-cards'
import { ICardsProps } from '@/src/types/components/organisms'
import { CardTypes } from '@/src/types/models/cards'

const Cards = ({ type }: ICardsProps) => {
  const { cards } = useCardStore()

  const cardType = type === CardTypes.Credit ? 'Credit' : 'Debit'

  const getCardsByType = () => {
    return cards.filter((card) => card.type === type)
  }

  return (
    <View flex={1} justifyContent="flex-start">
      {!getCardsByType().length && <NoCards />}
      <ScrollView>
        {getCardsByType().map((card) => {
          return (
            <View key={card.id} margin="$3">
              <CardDetails card={card} />
            </View>
          )
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
