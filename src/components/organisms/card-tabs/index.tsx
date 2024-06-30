import { Text } from 'tamagui'

import TabsList from '@/src/components/molecules/tabs-list'
import { ITabsListItem } from '@/src/types/components/molecules'

const CardTabs = () => {
  const itemsList: ITabsListItem[] = [
    {
      label: 'Credit Cards',
      value: 'credit',
      children: <Text>Credit Cards</Text>
    },
    {
      label: 'Debit Cards',
      value: 'debit',
      children: <Text>Debit Cards</Text>
    }
  ]

  return <TabsList items={itemsList} />
}

export default CardTabs
