import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type BadgeStoreProps = {
  id: number;
  name: string;
  email: string;
  eventTitle: string;
  checkInURL: string;
  image?: string;
};

type StateProps = {
  data: BadgeStoreProps | null;
  save: (data: BadgeStoreProps) => void;
  updateAvatar: (uri: string) => void;
  remove: () => void;
};

export const useBadgeStore = create(
  persist<StateProps>(
    (set) => ({
      data: null,
      save: (data: BadgeStoreProps) => set(() => ({ data })),
      updateAvatar: (uri: string) =>
        set((state) => ({
          data: state.data && { ...state.data, image: uri },
        })),
      remove: () => set(() => ({ data: null })),
    }),
    {
      name: "nlw-passin-mobile:badge",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
