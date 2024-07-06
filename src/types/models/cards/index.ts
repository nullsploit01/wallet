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
  createdAt: Date
  updatedAt: Date
}
