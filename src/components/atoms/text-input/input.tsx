import React, { Fragment } from 'react'
import { Input, Label } from 'tamagui'

import { ITextInputProps } from '@/src/types/components/atoms'
import { generateRandomId } from '@/src/utils/general'

const TextInput = ({ label, onValueChange, ...rest }: ITextInputProps) => {
  const ID = generateRandomId()

  return (
    <Fragment>
      <Label fontWeight="800" htmlFor={ID}>
        {label}
      </Label>
      <Input
        id={ID}
        borderColor="$gray10"
        onChange={(e) => {
          const v = e.nativeEvent.text?.trim()
          onValueChange?.(v)
        }}
        {...rest}
      />
    </Fragment>
  )
}

export default TextInput
