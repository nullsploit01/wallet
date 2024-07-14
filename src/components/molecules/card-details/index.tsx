import { AntDesign } from '@expo/vector-icons'
import { useAssets } from 'expo-asset'
import * as Clipboard from 'expo-clipboard'
import { Image } from 'expo-image'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { PaymentIcon } from 'react-native-payment-icons'
import { Card, Paragraph, Text, View, XStack } from 'tamagui'

import { useNotification } from '@/src/hooks/notification'
import { ICardDetailsProps } from '@/src/types/components/molecules'
import { CardTypes } from '@/src/types/models/cards'

const CardDetails = ({ card }: ICardDetailsProps) => {
  const [assets] = useAssets([
    require('@/src/assets/images/credit_card.png'),
    require('@/src/assets/images/wifi.png')
  ])

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
    <Card
      elevate
      shadowColor="$accentColor"
      backgroundColor={card.type === CardTypes.Credit ? '$gray9Dark' : 'black'}
      borderColor="$gray10"
      borderWidth="$1.5"
    >
      <View margin="$2">
        <Paragraph fontSize={20} color="$gray1">
          {card.type === CardTypes.Credit ? 'Credit' : 'Debit'} Card
        </Paragraph>
        <XStack justifyContent="space-between" alignContent="center">
          {assets?.length && (
            <Image style={{ width: 50, height: 70 }} source={{ uri: assets[0].uri }} />
          )}
          {assets?.length && assets?.length > 1 && (
            <Image style={{ width: 50, height: 70 }} source={{ uri: assets[1].uri }} />
          )}
        </XStack>
        <XStack alignItems="center" justifyContent="space-between">
          <Text fontFamily={'OswaldBold' as any} marginRight="$1" fontSize={35} color="$gray1">
            {card.number}
          </Text>
          <TouchableOpacity onPress={copyCardNumberToClipboard}>
            <AntDesign name="copy1" size={24} color="white" />
          </TouchableOpacity>
        </XStack>
        <XStack justifyContent="space-between" marginRight="$7">
          <XStack alignItems="center">
            <Paragraph color="$gray1" fontSize="$5" fontWeight="800" marginRight="$2">
              Valid Thru:
            </Paragraph>
            <Text color="$gray1">{card.expiry}</Text>
          </XStack>
          <XStack alignItems="center">
            <Paragraph color="$gray1" fontSize="$5" fontWeight="800" marginRight="$2">
              CVV:
            </Paragraph>
            <Text color="$gray1">{card.cvv}</Text>
          </XStack>
        </XStack>
        <XStack marginTop="$2" justifyContent="flex-start">
          <Text color="$gray1" fontSize="$7">
            {card.name}
          </Text>
        </XStack>
        <XStack justifyContent="flex-end" alignItems="center">
          <Text color="$gray1" fontSize="$5">
            {card.label}
          </Text>
          <View marginLeft="$2">
            {card.cardProvider && <PaymentIcon type={card.cardProvider} />}
          </View>
        </XStack>
      </View>
    </Card>
  )
}

export default CardDetails
