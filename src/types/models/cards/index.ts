import { CardProviders } from '@/src/constants/card'

export enum CardTypes {
  Credit,
  Debit
}

export interface ICard {
  id: string
  type: CardTypes
  number: string
  cvv: string
  expiry: string
  name: string
  label: string
  cardProvider: keyof typeof CardProviders | null
  createdAt: Date
  updatedAt: Date
}
