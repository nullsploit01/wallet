export enum CardTypes {
  Credit,
  Debit
}

export interface ICard {
  type: CardTypes
  number: string
  cvv: Date
  name: string
  label: string
}
