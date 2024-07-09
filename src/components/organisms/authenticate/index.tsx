import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Text, YStack } from 'tamagui'

import { IAuthenticateProps } from '@/src/types/components/organisms'

const Authenticate = ({ initialiseApplication }: IAuthenticateProps) => {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Entypo name="lock" size={24} color="black" />
      <TouchableOpacity onPress={initialiseApplication}>
        <Text theme="alt1" fontSize="$5" marginTop="$15">
          Unlock
        </Text>
      </TouchableOpacity>
    </YStack>
  )
}

export default Authenticate
