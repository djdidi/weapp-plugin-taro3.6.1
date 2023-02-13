import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.less'

export default class Index extends Component<PropsWithChildren> {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }]
  }

  render () {
    return (
      <View>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
      </View>
    )
  }
}
