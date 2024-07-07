import { ICard } from '@/src/types/models/cards'

export interface ICardStoreState {
  cards: ICard[]
}

export interface ICardStoreActions {
  addCard: (card: ICard) => Promise<void>
  getCards: () => Promise<ICard[]>
}
