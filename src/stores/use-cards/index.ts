import { create } from 'zustand'

import { cardService } from '@/src/services/card'
import { ICard } from '@/src/types/models/cards'
import { ICardStoreActions, ICardStoreState } from '@/src/types/stores'
import { generateRandomId } from '@/src/utils/general'

export const useCardStore = create<ICardStoreState & ICardStoreActions>((set, get) => ({
  cards: [],

  addCard: async (card: ICard) => {
    card = { ...card, createdAt: new Date(), updatedAt: new Date(), id: generateRandomId() }
    set((state) => ({ cards: [card, ...state.cards] }))
    await cardService.storeCards(get().cards)
  },

  getCards: async () => {
    const storedCards = (await cardService.getCards()).cards as ICard[]
    return storedCards.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
  }
}))
