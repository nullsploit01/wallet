import { encryptionService } from '@/src/services/encryption'
import { storageService } from '@/src/services/storage'
import { ICard } from '@/src/types/models/cards'

class CardService {
  private cardsStorageKey = 'CARDS_KEY'

  storeCards = async (cards: ICard[]) => {
    const encryptedData = await encryptionService.encrypt({ cards })
    await storageService.storeItem(this.cardsStorageKey, encryptedData)
  }

  getCards = async () => {
    try {
      const encryptedCards = await storageService.getItem(this.cardsStorageKey)
      if (!encryptedCards) return null
      const decryptedData = await encryptionService.decrypt(encryptedCards)
      return JSON.parse(decryptedData)
    } catch {
      return null
    }
  }
}

export const cardService = new CardService()
