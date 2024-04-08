import { Text, View } from "react-native";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <View className="w-full h-28 items-end flex-row bg-black/20 px-8 pb-4 border-b border-white/10">
      <Text className="text-white flex-1 font-medium text-lg text-center">
        {title}
      </Text>
    </View>
  );
}
