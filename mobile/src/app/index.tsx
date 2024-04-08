import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert, Image, View } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { api } from "@/server/api";
import { useBadgeStore } from "@/store/badge-store";
import { colors } from "@/styles/colors";
import { Link, Redirect } from "expo-router";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const badgeStore = useBadgeStore();

  async function handleAccessCredential() {
    try {
      if (!code.trim())
        return Alert.alert("Ingresso", "Informe o código do ingresso!");

      setIsLoading(true);

      const { data } = await api.get(`/attendees/${code}/badge`);

      badgeStore.save(data.badge);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Ingresso", "Ingresso não encontrado!");
    }
  }

  if (badgeStore.data?.checkInURL) return <Redirect href="/ticket" />;

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Código do ingresso..."
            onChangeText={setCode}
          />
        </Input>

        <Button
          title="ACESSAR CREDENCIAL"
          onPress={handleAccessCredential}
          isLoading={isLoading}
        />

        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui um ingresso?
        </Link>
      </View>
    </View>
  );
}
