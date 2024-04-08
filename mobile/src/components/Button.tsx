import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      disabled={isLoading}
      activeOpacity={0.7}
      className="w-full h-14 bg-orange-500 justify-center items-center rounded-lg"
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-green-500 font-bold uppercase text-base">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
