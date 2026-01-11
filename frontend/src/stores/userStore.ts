import { create } from 'zustand';

interface Character {
  id: string;
  name: string;
  level: number;
  currentXP: number;
  totalXP: number;
  coins: number;
  distanceTraveled: number;
}

interface User {
  id: string;
  email: string;
  username: string;
  character: Character | null;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
  updateCharacter: (character: Partial<Character>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),

  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),

  updateCharacter: (characterUpdate) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            character: state.user.character
              ? { ...state.user.character, ...characterUpdate }
              : null,
          }
        : null,
    })),
}));
