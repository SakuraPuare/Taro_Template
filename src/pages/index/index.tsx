import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import type CustomTabBar from '@/custom-tab-bar'

export default class Index extends Component {
  pageCtx = Taro.getCurrentInstance().page

  componentDidShow() {
    const tabbar = Taro.getTabBar<CustomTabBar>(this.pageCtx)
    tabbar?.setSelected(0)
  }

  render() {
    return (
      <View className="index">
        <Text>我是首页！</Text>
        <View className="index bg-[#123456]">
          <Text className="text-[55rpx] text-[#fff]">Hello world!</Text>
        </View>
        <AtButton type="primary">按钮文案</AtButton>
        <View className="i-mdi-home text-3xl text-red-6000" />
      </View>
    )
  }
}
