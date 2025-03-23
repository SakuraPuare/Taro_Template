import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import type CustomTabBar from '@/custom-tab-bar'
import { useSelector, useDispatch } from 'react-redux'
import { ADD } from '@/redux/constant/counter'

export default function Index() {
  const counter = useSelector((state: any) => state.counter)
  const dispatch = useDispatch()

  useDidShow(() => {
    const pageCtx = Taro.getCurrentInstance().page
    const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx)
    tabbar?.setSelected(0)
  })

  return (
    <View className="index">
      <Text>我是首页！</Text>
      <View className="index bg-[#123456]">
        <Text className="text-[55rpx] text-[#fff]">Hello world!</Text>
      </View>
      <AtButton type="primary">按钮文案</AtButton>
      <View className="i-mdi-home text-3xl text-red-6000" />

      <View>
        <Text>当前计数：{counter.num}</Text>
        <AtButton type="primary" onClick={() => dispatch({ type: ADD })}>
          增加
        </AtButton>
      </View>
    </View>
  )
}
