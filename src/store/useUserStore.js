import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create()(
  persist(
    (set) => ({
      isLogin: false,
      userInfo: {},
      setUserInfo: (state) =>
        set({
          userInfo: state,
        }),

      setIsLogin: (state) =>
        set({
          isLogin: state,
        }),

      removeUserInfo: () =>
        set(
          ({ setUserInfo, removeUserInfo, setIsLogin }) => ({
            setUserInfo,
            removeUserInfo,
            setIsLogin,
          }),
          true
        ),
    }),
    {
      name: 'auth',
    }
  )
);
