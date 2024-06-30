import { ReactNode } from 'react'

export interface ITabsListItem {
  label: string
  value: string
  children: ReactNode
}

export interface ITabsListProps {
  items: ITabsListItem[]
}
