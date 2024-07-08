import { useEffect, useState } from 'react'
import { ScrollView, View } from 'tamagui'

import CardDetails from '@/src/components/molecules/card-details'
import DialogBox from '@/src/components/molecules/dialog-box'
import CardForm from '@/src/components/organisms/card-form'
import { useCardStore } from '@/src/stores/use-cards'
import { ICardsProps } from '@/src/types/components/organisms'
import { CardTypes, ICard } from '@/src/types/models/cards'

const Cards = ({ type }: ICardsProps) => {
  const { getCards, cards } = useCardStore()
  const [_cards, setCards] = useState<ICard[]>([])

  useEffect(() => {
    getCards().then((cards) => {
      setCards(cards)
    })
  }, [cards])

  const cardType = type === CardTypes.Credit ? 'Credit' : 'Debit'

  return (
    <View flex={1} justifyContent="flex-start">
      <ScrollView>
        {_cards.map((card) => {
          if (card.type === type) {
            return (
              <View key={card.id} margin="$3">
                <CardDetails card={card} />
              </View>
            )
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
