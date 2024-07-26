import { View, XStack } from 'tamagui'

import { CardColors } from '@/src/constants/card'
import { ICardColorPaletteProps } from '@/src/types/components/molecules'

const CardColorPalette = ({ card }: ICardColorPaletteProps) => {
  const colors = CardColors[card.type]
  const activeColor = colors.find((c) => c === card.color)

  return (
    <View>
      <XStack justifyContent="center" alignItems="center">
        {colors.map((color, idx) => {
          return (
            <View
              marginHorizontal="$3"
              key={idx}
              backgroundColor={color}
              width="$1.5"
              height="$1.5"
              borderRadius="$5"
              borderWidth={activeColor === color ? '$1.5' : undefined}
              borderColor="$green10Dark"
            ></View>
          )
        })}
      </XStack>
    </View>
  )
}

export default CardColorPalette
