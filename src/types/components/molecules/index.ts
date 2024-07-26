import { ReactNode } from 'react'

import { ICard } from '@/src/types/models/cards'

export interface ITabsListItem {
  label: string
  value: string
  children: ReactNode
}

export interface ITabsListProps {
  items: ITabsListItem[]
}

export interface ICardDetailsProps {
  card: ICard
}

export interface ICardMenuProps {
  card: ICard
}

export interface ICardColorPaletteProps {
  card: ICard
}
