import { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'

import Cards from '@/src/components/organisms/cards'
import { CardTypes } from '@/src/types/models/cards'

const CardTabs = () => {
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'credit', title: 'Credit Cards' },
    { key: 'debit', title: 'Debit Cards' }
  ])

  const renderScene = SceneMap({
    credit: () => <Cards type={CardTypes.Credit} />,
    debit: () => <Cards type={CardTypes.Debit} />
  })

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

export default CardTabs
