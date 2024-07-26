import { CardProviders } from '@/src/constants/card'
import { CardTypes, ICard } from '@/src/types/models/cards'

export const getCardProvider = (provider: keyof typeof CardProviders) => {
  return CardProviders[provider] || null
}

export const getCardDefaultColor = (card: ICard) => {
  return card.type === CardTypes.Credit ? 'black' : 'red'
}
