import React from 'react'
import {
  VirtualizedList,
  View
} from 'react-native'

export default class ImmutableFlatList extends React.PureComponent {
  render () {
    const { renderItem, data, ItemSeparatorComponent, ...props } = this.props

    return (
      <VirtualizedList
        {...props}
        data={data}
        getItem={(data, index) => data.get(index)}
        getItemCount={(data) => data.size}
        renderItem={(itemData) => (
          <View>
            {
              renderItem(itemData)
            }
            {
              itemData.index < data.size - 1 && ItemSeparatorComponent
                ? <ItemSeparatorComponent />
                : null
            }
          </View>
        )}
      />
    )
  }
}
