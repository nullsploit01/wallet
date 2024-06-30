import { Text } from 'tamagui'

import { ICardsProps } from '@/src/types/components/organisms'

const Cards = ({ type }: ICardsProps) => {
  return <Text>{type} Card</Text>
}

export default Cards
