import { ReactNode } from 'react'

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
