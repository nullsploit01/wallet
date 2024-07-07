import CryptoES from 'crypto-es'
import { CipherParams } from 'crypto-es/lib/cipher-core'

import { secureStorageService } from '@/src/services/secure-storage'
import { generateRandomId } from '@/src/utils/general'

class EncryptionService {
  private encryptionKeyStorageKey = 'ENCRYPTION_KEY'

  encrypt = (key: string, value: Record<string, any>) => {
    return CryptoES.AES.encrypt(JSON.stringify(value), key)
  }

  decrypt = (key: string, encryptedText: CipherParams) => {
    const decryptedText = CryptoES.AES.decrypt(encryptedText, key)
    return decryptedText.toString(CryptoES.enc.Utf8)
  }

  setEncryptionKey = async () => {
    if (!(await this.getEncryptionKey())) {
      await secureStorageService.storeItem(this.encryptionKeyStorageKey, {
        key: generateRandomId(256)
      })
    }
  }

  getEncryptionKey = async () => {
    try {
      const encryptionKey = await secureStorageService.getItem(this.encryptionKeyStorageKey)
      if (!encryptionKey) return null
      return JSON.parse(encryptionKey)
    } catch {
      return null
    }
  }
}

export const encryptionService = new EncryptionService()
