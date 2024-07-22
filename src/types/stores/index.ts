import { ICard } from '@/src/types/models/cards'

export interface ICardStoreState {
  cards: ICard[]
}

export interface ICardStoreActions {
  addCard: (card: ICard) => void
  getCards: () => ICard[]
  getCardsFromStorage: () => Promise<ICard[]>
  removeCard: (card: ICard) => void
  editCard: (card: ICard) => void
  removeAllCards: () => void
}
