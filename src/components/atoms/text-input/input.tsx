import React, { Fragment } from 'react'
import { Input } from 'tamagui'

import { ITextInputProps } from '@/src/types/components/atoms'

const TextInput = ({ onValueChange, ...rest }: ITextInputProps) => {
  return (
    <Fragment>
      <Input
        borderColor="$gray10"
        onChange={(e) => {
          const v = e.nativeEvent.text
          onValueChange?.(v)
        }}
        {...rest}
      />
    </Fragment>
  )
}

export default TextInput
