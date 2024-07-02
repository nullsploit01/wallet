import { CardTypes } from '@/src/types/models/cards'

export interface ICardsProps {
  type: CardTypes
}

export interface ICardFormProps {
  type: CardTypes
}

export interface ICardTabsProps {
  active?: CardTypes
}
