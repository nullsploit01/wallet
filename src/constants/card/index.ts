import { types as CardType } from 'credit-card-type'

import { CardTypes } from '@/src/types/models/cards'

export const CardProviders = {
  visa: CardType.VISA,
  mastercard: CardType.MASTERCARD,
  'american-express': CardType.AMERICAN_EXPRESS,
  'diners-club': CardType.DINERS_CLUB,
  discover: CardType.DISCOVER,
  jcb: CardType.JCB,
  unionpay: CardType.UNIONPAY,
  maestro: CardType.MAESTRO,
  elo: CardType.ELO,
  mir: CardType.MIR,
  hiper: CardType.HIPER,
  hipercard: CardType.HIPERCARD
}

export const CardColors = {
  [CardTypes.Debit]: [
    '#006666', // Dark Teal
    '#CC7000', // Dark Orange
    '#B22222', // Firebrick Red
    '#004D00', // Dark Green
    '#505A5A', // Dark Slate Gray
    '#660000' // Dark Maroon
  ],

  [CardTypes.Credit]: [
    '#001a33', // Dark Navy Blue
    '#B8860B', // Dark Goldenrod
    '#696969', // Dim Gray (Dark Silver)
    '#27408B', // Dark Slate Blue
    '#2E8B57', // Sea Green (Darker)
    '#4B0082' // Indigo
  ]
} as const
