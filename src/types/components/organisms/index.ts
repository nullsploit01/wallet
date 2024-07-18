import { CardTypes, ICard } from '@/src/types/models/cards'

export interface ICardsProps {
  type: CardTypes
}

interface ICardFormPropsBase {
  type: CardTypes
}

interface ICardFormEditProps extends ICardFormPropsBase {
  isEdit: true
  card: ICard
}

interface ICardFormCreateProps extends ICardFormPropsBase {
  isEdit?: false
  card?: undefined
}

export type ICardFormProps = ICardFormEditProps | ICardFormCreateProps
export interface ICardTabsProps {
  active?: CardTypes
}

export interface IAuthenticateProps {
  initialiseApplication: () => Promise<void>
}
