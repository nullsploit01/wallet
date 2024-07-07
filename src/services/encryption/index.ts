import CryptoES from 'crypto-es'
import { CipherParams } from 'crypto-es/lib/cipher-core'

import { secureStorageService } from '@/src/services/secure-storage'
import { generateRandomId } from '@/src/utils/general'

class EncryptionService {
  private encryptionKeyStorageKey = 'ENCRYPTION_KEY'

  encrypt = async (value: Record<string, any>) => {
    const key = await this.getEncryptionKey()

    if (!key?.key) {
      throw new Error('Encryption key is not defined')
    }

    return CryptoES.AES.encrypt(JSON.stringify(value), key.key)
  }

  decrypt = async (encryptedText: CipherParams) => {
    const key = await this.getEncryptionKey()

    if (!key?.key) {
      throw new Error('Encryption key is not defined')
    }

    const decryptedText = CryptoES.AES.decrypt(encryptedText, key.key)
    return decryptedText.toString(CryptoES.enc.Utf8)
  }

  setEncryptionKey = async () => {
    if (await this.getEncryptionKey()) {
      return
    }

    await secureStorageService.storeItem(this.encryptionKeyStorageKey, {
      key: generateRandomId(256)
    })
  }

  getEncryptionKey = async () => {
    return await secureStorageService.getItem(this.encryptionKeyStorageKey)
  }
}

export const encryptionService = new EncryptionService()
