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

export interface IDialogBoxProps {
  label: string
  title: string | ReactNode
  description?: string | ReactNode
  content?: ReactNode
}

export interface ICardDetailsProps {
  card: ICard
}
