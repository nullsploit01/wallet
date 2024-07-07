import React from 'react'
import { Card, Text, YStack } from 'tamagui'

import { ICardDetailsProps } from '@/src/types/components/molecules'

const CardDetails = ({ card }: ICardDetailsProps) => {
  return (
    <Card elevate>
      <Text>{card.name}</Text>
    </Card>
  )
}

export default CardDetails
