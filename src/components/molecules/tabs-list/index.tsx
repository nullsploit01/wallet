import { Tabs, TabsContentProps, Text } from 'tamagui'

import { ITabsListProps } from '@/src/types/components/molecules'

const TabsList = ({ items }: ITabsListProps) => {
  return (
    <Tabs
      elevate
      flex={1}
      flexDirection="column"
      borderColor="$borderColor"
      defaultValue={items.length ? items[0].value : undefined}
    >
      <Tabs.List>
        {items.map((item) => {
          return (
            <Tabs.Tab key={item.value} flex={1} value={item.value}>
              <Text fontFamily="$body">{item.label}</Text>
            </Tabs.Tab>
          )
        })}
      </Tabs.List>

      {items.map((item) => {
        return (
          <TabsContent key={item.value} value={item.value}>
            {item.children}
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content backgroundColor="$background" flex={1} {...props}>
      {props.children}
    </Tabs.Content>
  )
}

export default TabsList
