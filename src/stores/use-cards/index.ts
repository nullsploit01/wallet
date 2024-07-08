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
    return get().cards.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
  },

  getCardsFromStorage: async () => {
    const storedCardsData = await cardService.getCards()
    if (!storedCardsData) return []

    const storedCards = storedCardsData.cards as ICard[]
    set((state) => {
      const currentCards = state.cards
      const newCards = storedCards.filter(
        (newCard) => !currentCards.some((currentCard) => currentCard.id === newCard.id)
      )
      return { cards: [...newCards, ...currentCards] }
    })
    const combinedCards = [...storedCards, ...get().cards]
    return combinedCards.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
  }
}))
