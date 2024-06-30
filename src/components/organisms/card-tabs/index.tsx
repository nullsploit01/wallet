import TabsList from '@/src/components/molecules/tabs-list'
import Cards from '@/src/components/organisms/cards'
import { ITabsListItem } from '@/src/types/components/molecules'
import { CardTypes } from '@/src/types/models/cards'

const CardTabs = () => {
  const itemsList: ITabsListItem[] = [
    {
      label: 'Credit Cards',
      value: 'credit',
      children: <Cards type={CardTypes.Credit} />
    },
    {
      label: 'Debit Cards',
      value: 'debit',
      children: <Cards type={CardTypes.Debit} />
    }
  ]

  return <TabsList items={itemsList} />
}

export default CardTabs
