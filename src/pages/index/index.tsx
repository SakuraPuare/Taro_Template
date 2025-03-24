import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from "@/redux/constant/counter";

export default function Index() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <View>
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

      <View className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></View>
      <View className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></View>
      <View className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></View>
      <View className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></View>
    </View>
  );
}
