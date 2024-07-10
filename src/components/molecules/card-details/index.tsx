import { AntDesign } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Card, Paragraph, Text, View, XStack } from 'tamagui'

import { useNotification } from '@/src/hooks/notification'
import { ICardDetailsProps } from '@/src/types/components/molecules'

const CardDetails = ({ card }: ICardDetailsProps) => {
  const { showNotification } = useNotification()

  const copyCardNumberToClipboard = async () => {
    const cardNumber = card.number.split(' ').join('')
    await Clipboard.setStringAsync(cardNumber)
    showNotification({
      title: 'Copied!',
      message: 'Card number copied successfully'
    })
  }

  return (
    <Card elevate shadowColor="$accentColor" borderTopColor="$gray10Dark" borderTopWidth="$1.5">
      <View margin="$3">
        <XStack alignItems="center">
          <Text marginRight="$3" fontSize="$9">
            {card.number}
          </Text>
          <TouchableOpacity onPress={copyCardNumberToClipboard}>
            <AntDesign name="copy1" size={24} color="black" />
          </TouchableOpacity>
        </XStack>
        <XStack justifyContent="space-between" marginRight="$7">
          <XStack alignItems="center">
            <Paragraph fontSize="$5" fontWeight="800" marginRight="$2">
              Valid Thru:
            </Paragraph>
            <Text>{card.expiry}</Text>
          </XStack>
          <XStack alignItems="center">
            <Paragraph fontSize="$5" fontWeight="800" marginRight="$2">
              CVV:
            </Paragraph>
            <Text>{card.cvv}</Text>
          </XStack>
        </XStack>
        <XStack marginTop="$2" justifyContent="flex-start">
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
