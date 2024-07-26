import { CardColors, CardProviders } from '@/src/constants/card'
import { CardTypes, ICard } from '@/src/types/models/cards'

export const getCardProvider = (provider: keyof typeof CardProviders) => {
  return CardProviders[provider] || null
}

export const getCardDefaultColor = (card: ICard) => {
  const colors =
    card.type === CardTypes.Credit ? CardColors[CardTypes.Credit] : CardColors[CardTypes.Debit]
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}
