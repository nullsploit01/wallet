import { create } from 'zustand'

import { ICard } from '@/src/types/models/cards'
import { ICardStoreActions, ICardStoreState } from '@/src/types/stores'
import { generateRandomId } from '@/src/utils/general'

export const useCardStore = create<ICardStoreState & ICardStoreActions>((set) => ({
  cards: [],

  addCard: (card: ICard) => {
    card = { ...card, createdAt: new Date(), updatedAt: new Date(), id: generateRandomId() }
    set((state) => ({ cards: [card, ...state.cards] }))
  }
}))
