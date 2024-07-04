import { router } from 'expo-router'
import { useState } from 'react'
import { formatWithMask } from 'react-native-mask-input'
import { Button, Form, Spinner, View, XStack, YStack } from 'tamagui'

import TextInput from '@/src/components/atoms/text-input/input'
import { useCardStore } from '@/src/stores/use-cards'
import { ICardFormProps } from '@/src/types/components/organisms'
import { ICard } from '@/src/types/models/cards'

const CardForm = ({ type }: ICardFormProps) => {
  const cardNumberMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]

  const cardValidTillDateMask = [/\d/, /\d/, '/', /\d/, /\d/]

  const [_status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')
  const [_cardDetails, setCardDetails] = useState<ICard>({ type } as ICard)

  const { addCard } = useCardStore()

  const onSave = () => {
    addCard(_cardDetails)
    router.replace({ pathname: '/', params: { type } })
  }

  return (
    <Form
      alignItems="center"
      gap="$2"
      onSubmit={() => setStatus('submitting')}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <YStack width="100%">
        <TextInput
          width="100%"
          value={_cardDetails.name}
          placeholder="John Doe"
          label="Card Holder Name"
          marginBottom="$1.5"
          onValueChange={(v) => {
            setCardDetails((prev) => {
              return { ...prev, name: v }
            })
          }}
        />
        <TextInput
          marginBottom="$1.5"
          width="100%"
          value={_cardDetails.number}
          keyboardType="numeric"
          placeholder="4111 4322 5675"
          label="Card Number"
          onValueChange={(v) => {
            const { masked } = formatWithMask({
              text: v,
              mask: cardNumberMask
            })

            setCardDetails((prev) => {
              return { ...prev, number: masked }
            })
          }}
        />
        <XStack justifyContent="space-between">
          <View width="45%">
            <TextInput
              value={_cardDetails.expiry?.toString()}
              marginBottom="$1.5"
              placeholder="MM/YY"
              keyboardType="numeric"
              label="Valid Till"
              onValueChange={(v) => {
                const { masked } = formatWithMask({
                  text: v,
                  mask: cardValidTillDateMask
                })

                setCardDetails((prev) => {
                  return { ...prev, expiry: masked }
                })
              }}
            />
          </View>
          <View width="45%">
            <TextInput
              marginBottom="$1.5"
              placeholder="***"
              label="CVV"
              value={_cardDetails.cvv}
              onValueChange={(v) => {
                setCardDetails((prev) => {
                  return { ...prev, cvv: v }
                })
              }}
            />
          </View>
        </XStack>
        <TextInput
          marginBottom="$2.5"
          placeholder="American Express"
          label="Card Name"
          value={_cardDetails.label}
          onValueChange={(v) => {
            setCardDetails((prev) => {
              return { ...prev, label: v }
            })
          }}
        />
      </YStack>

      <Form.Trigger asChild disabled={_status !== 'off'}>
        <Button
          width="100%"
          onPress={onSave}
          icon={_status === 'submitting' ? () => <Spinner /> : undefined}
        >
          Save
        </Button>
      </Form.Trigger>
    </Form>
  )
}

export default CardForm
