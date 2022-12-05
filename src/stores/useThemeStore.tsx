import create from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "../utils/themeUtils";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

export interface ThemeState  {
    theme:string,
    toggleTheme:(theme:string) => void;
}

const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state:any) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
        setLightTheme: () =>
        set(() => ({
          theme: THEME_LIGHT
        })),
        setDarkTheme: () =>
        set(() => ({
          theme:THEME_DARK
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;