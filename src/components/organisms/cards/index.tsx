import { Fragment } from 'react'
import { Text } from 'tamagui'

import DialogBox from '@/src/components/molecules/dialog-box'
import { ICardsProps } from '@/src/types/components/organisms'

const Cards = ({ type }: ICardsProps) => {
  return (
    <Fragment>
      <Text>{type} Card</Text>
      <DialogBox label="Add Card" title="Add Card" />
    </Fragment>
  )
}

export default Cards
