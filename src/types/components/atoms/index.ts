import { InputProps } from 'tamagui'

export interface ITextInputProps extends InputProps {
  onValueChange?: (value: string) => void
  label: string
}
