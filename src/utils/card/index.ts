import { CardProviders } from '@/src/constants/card'

export const getCardProvider = (provider: keyof typeof CardProviders) => {
  return CardProviders[provider] || null
}
