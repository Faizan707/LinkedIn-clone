import { create } from 'zustand';
import { DecodedTokenType } from '@/lib/types';
type UserState = {
  user: DecodedTokenType | null;
  setUser: (user: DecodedTokenType) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
