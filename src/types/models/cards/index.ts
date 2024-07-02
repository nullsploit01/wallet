export enum CardTypes {
  Credit,
  Debit
}

export interface ICard {
  type: CardTypes
  number: string
  cvv: string
  expiry: Date | string
  name: string
  label: string
}
