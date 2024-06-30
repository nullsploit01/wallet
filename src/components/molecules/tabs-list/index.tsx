import { Tabs, TabsContentProps, Text } from 'tamagui'

import { ITabsListProps } from '@/src/types/components/molecules'

const TabsList = ({ items }: ITabsListProps) => {
  return (
    <Tabs
      defaultValue={items.length ? items[0].value : undefined}
      orientation="horizontal"
      flexDirection="column"
      borderRadius="$4"
      flex={1}
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
      elevate
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
    <Tabs.Content
      backgroundColor="$background"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}

export default TabsList
