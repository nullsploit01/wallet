import React, { Fragment } from 'react'
import { Input, Label, Text } from 'tamagui'

import { ITextInputProps } from '@/src/types/components/atoms'
import { generateRandomId } from '@/src/utils/general'

const TextInput = ({ label, error, onValueChange, ...rest }: ITextInputProps) => {
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
          const v = e.nativeEvent.text
          onValueChange?.(v)
        }}
        {...rest}
      />
      {error && <Text color="$red10">{error}</Text>}
    </Fragment>
  )
}

export default TextInput
