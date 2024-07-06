import cardValidator from 'card-validator'
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
  const cardCVVMask = [/\d/, /\d/, /\d/, /\d/]

  const [_status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')
  const [_cardDetails, setCardDetails] = useState<ICard>({ type } as ICard)
  const [_cardDetailsValidation, setCardDetailsValidation] = useState({
    number: true,
    cvv: true,
    name: true,
    expiry: true,
    messages: {
      number: '',
      cvv: '',
      name: '',
      expiry: ''
    }
  })

  const { addCard } = useCardStore()

  const onSave = () => {
    if (!isCardValid()) {
      if (!_cardDetails.name?.trim()) {
        setCardDetailsValidation((prev) => {
          return {
            ...prev,
            name: false,
            messages: {
              ...prev.messages,
              name: 'Please enter card holder name'
            }
          }
        })
      }

      if (!_cardDetails.expiry?.trim()) {
        setCardDetailsValidation((prev) => {
          return {
            ...prev,
            expiry: false,
            messages: {
              ...prev.messages,
              expiry: 'Please enter valid till date'
            }
          }
        })
      }

      if (!_cardDetails.cvv?.trim()) {
        setCardDetailsValidation((prev) => {
          return {
            ...prev,
            cvv: false,
            messages: {
              ...prev.messages,
              cvv: 'Please enter card CVV'
            }
          }
        })
      }

      if (!_cardDetails.number?.trim()) {
        setCardDetailsValidation((prev) => {
          return {
            ...prev,
            number: false,
            messages: {
              ...prev.messages,
              number: 'Please enter card number'
            }
          }
        })
      }
      return
    }

    addCard(_cardDetails)
    router.replace({ pathname: '/', params: { type } })
  }

  const isCardValid = () => {
    return (
      _cardDetailsValidation.cvv &&
      _cardDetailsValidation.number &&
      _cardDetailsValidation.expiry &&
      _cardDetailsValidation.name &&
      _cardDetails.number &&
      _cardDetails.name &&
      _cardDetails.cvv &&
      _cardDetails.expiry
    )
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
          autoComplete="additional-name"
          marginBottom="$1.5"
          error={!_cardDetailsValidation.name ? _cardDetailsValidation.messages.name : undefined}
          onValueChange={(v) => {
            const validationStatus =
              cardValidator.cardholderName(v).isValid ||
              cardValidator.cardholderName(v).isPotentiallyValid

            setCardDetailsValidation((prev) => {
              return {
                ...prev,
                name: validationStatus,
                messages: {
                  ...prev.messages,
                  name: !validationStatus ? 'Invalid Name' : ''
                }
              }
            })

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
          autoComplete="cc-number"
          placeholder="4111 4322 5675"
          label="Card Number"
          error={
            !_cardDetailsValidation.number ? _cardDetailsValidation.messages.number : undefined
          }
          onValueChange={(v) => {
            const { masked } = formatWithMask({
              text: v,
              mask: cardNumberMask
            })

            const validationStatus =
              cardValidator.number(masked).isValid ||
              cardValidator.number(masked).isPotentiallyValid

            setCardDetailsValidation((prev) => {
              return {
                ...prev,
                number: validationStatus,
                messages: {
                  ...prev.messages,
                  number: !validationStatus ? 'Invalid Card Number' : ''
                }
              }
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
              error={
                !_cardDetailsValidation.expiry ? _cardDetailsValidation.messages.expiry : undefined
              }
              label="Valid Till"
              autoComplete="cc-exp"
              onValueChange={(v) => {
                const { masked } = formatWithMask({
                  text: v,
                  mask: cardValidTillDateMask
                })

                const validationStatus =
                  cardValidator.expirationDate(masked).isValid ||
                  cardValidator.expirationDate(masked).isPotentiallyValid

                setCardDetailsValidation((prev) => {
                  return {
                    ...prev,
                    expiry: validationStatus,
                    messages: {
                      ...prev.messages,
                      expiry: !validationStatus ? 'Invalid Date' : ''
                    }
                  }
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
              autoComplete="cc-csc"
              keyboardType="numeric"
              label="CVV"
              error={!_cardDetailsValidation.cvv ? _cardDetailsValidation.messages.cvv : undefined}
              value={_cardDetails.cvv}
              onValueChange={(v) => {
                const { masked } = formatWithMask({
                  text: v,
                  mask: cardCVVMask
                })

                const validationStatus =
                  cardValidator.cardholderName(masked).isValid ||
                  cardValidator.cardholderName(masked).isPotentiallyValid

                setCardDetailsValidation((prev) => {
                  return {
                    ...prev,
                    cvv: validationStatus,
                    messages: {
                      ...prev.messages,
                      cvv: !validationStatus ? 'Invalid CVV' : ''
                    }
                  }
                })

                setCardDetails((prev) => {
                  return { ...prev, cvv: masked }
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

      <Button
        width="100%"
        onPress={onSave}
        icon={_status === 'submitting' ? () => <Spinner /> : undefined}
      >
        Save
      </Button>
    </Form>
  )
}

export default CardForm
