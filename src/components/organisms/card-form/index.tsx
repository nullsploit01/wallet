import { useState } from 'react'
import { Button, Form, Spinner, XStack, YStack } from 'tamagui'

import TextInput from '@/src/components/atoms/text-input/input'

const CardForm = () => {
  const [_status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')

  return (
    <Form
      alignItems="center"
      minWidth={300}
      gap="$2"
      onSubmit={() => setStatus('submitting')}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <YStack width="100%">
        <TextInput width="100%" placeholder="XXXX XXXX XXXX" />
        <XStack justifyContent="space-between" width="100%" marginVertical="$3">
          <TextInput width="45%" placeholder="MM/YY" />
          <TextInput width="45%" placeholder="CVV" />
        </XStack>
      </YStack>

      <Form.Trigger asChild disabled={_status !== 'off'}>
        <Button icon={_status === 'submitting' ? () => <Spinner /> : undefined}>Save</Button>
      </Form.Trigger>
    </Form>
  )
}

export default CardForm
