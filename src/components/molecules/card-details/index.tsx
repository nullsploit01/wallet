import React from 'react'
import { Card, Paragraph, Text, View, XStack } from 'tamagui'

import { ICardDetailsProps } from '@/src/types/components/molecules'

const CardDetails = ({ card }: ICardDetailsProps) => {
  return (
    <Card elevate shadowColor="$accentColor" borderTopColor="$gray10Dark" borderTopWidth="$1.5">
      <View margin="$3">
        <Text fontSize="$9">{card.number}</Text>
        <XStack justifyContent="space-between" marginRight="$7">
          <XStack>
            <Paragraph fontSize="$5" fontWeight="800" marginRight="$3">
              Valid Thru:
            </Paragraph>
            <Text>{card.expiry}</Text>
          </XStack>
          <XStack>
            <Paragraph fontSize="$5" fontWeight="800" marginRight="$3">
              CVV:
            </Paragraph>
            <Text>{card.cvv}</Text>
          </XStack>
        </XStack>
        <XStack justifyContent="flex-start">
          <Text fontSize="$7">{card.name}</Text>
        </XStack>
        <XStack justifyContent="flex-end">
          <Text fontSize="$5">{card.label}</Text>
        </XStack>
      </View>
    </Card>
  )
}

export default CardDetails
