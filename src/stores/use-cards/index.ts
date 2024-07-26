import { create } from 'zustand'

import { cardService } from '@/src/services/card'
import { ICard } from '@/src/types/models/cards'
import { ICardStoreActions, ICardStoreState } from '@/src/types/stores'
import { getCardDefaultColor } from '@/src/utils/card'
import { generateRandomId } from '@/src/utils/general'

export const useCardStore = create<ICardStoreState & ICardStoreActions>((set, get) => ({
  cards: [],

  addCard: (card: ICard) => {
    card = {
      ...card,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: generateRandomId(),
      color: getCardDefaultColor(card)
    }
    set((state) => ({ cards: [card, ...state.cards] }))
    cardService.storeCards(get().cards)
  },

  getCards: () => {
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
  },

  editCard: (card: ICard) => {
    card.updatedAt = new Date()
    const filteredCards = get().cards.filter((c) => c.id !== card.id)
    const updatedCards = [...filteredCards, card]
    set(() => ({ cards: updatedCards }))
    cardService.storeCards(updatedCards)
  },

  removeCard: (card: ICard) => {
    const filteredCards = get().cards.filter((c) => c.id !== card.id)
    set(() => ({ cards: [...filteredCards] }))
    cardService.storeCards(filteredCards)
  },

  removeAllCards: () => {
    set(() => {
      return { cards: [] }
    })
  }
}))
