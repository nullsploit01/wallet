import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Separator, Text, View, XStack } from 'tamagui'

const CardMenu = () => {
  return (
    <View margin="$4" flex={1}>
      <TouchableOpacity>
        <XStack alignItems="center" marginVertical="$3">
          <AntDesign name="edit" size={36} color="black" />
          <Text fontSize={25} marginLeft="$5">
            Edit Card
          </Text>
        </XStack>
      </TouchableOpacity>
      <Separator borderColor="$gray8Light" />
      <TouchableOpacity>
        <XStack alignItems="center" marginVertical="$3">
          <MaterialIcons name="delete" size={36} color="red" />
          <Text fontSize={25} marginLeft="$5">
            Delete Card
          </Text>
        </XStack>
      </TouchableOpacity>
    </View>
  )
}

export default CardMenu
