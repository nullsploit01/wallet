import { ReactNode } from 'react'
import { InputProps, PopoverProps } from 'tamagui'

export interface ITextInputProps extends InputProps {
  onValueChange?: (value: string) => void
  label: string
  error?: string
}

export interface IPopoverMenuProps extends PopoverProps {
  content: ReactNode
  children: ReactNode
}

export interface IDialogBoxProps {
  label: string
  title: string | ReactNode
  description?: string | ReactNode
  content?: ReactNode
}
