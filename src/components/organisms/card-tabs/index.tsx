import { useState } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

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

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  )

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2F3645'
  },
  indicator: {
    backgroundColor: 'white'
  },
  label: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default CardTabs
