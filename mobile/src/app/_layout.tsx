import "@/styles/global.css";

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loading } from "@/components/Loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <>
      <StatusBar style="light" translucent />
      <Slot />
    </>
  );
}
