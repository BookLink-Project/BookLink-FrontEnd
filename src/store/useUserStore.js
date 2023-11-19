import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
  isLogin: false,
  userInfo: { address: '', email: '', nickname: '', name: '' },
};

export const useUserStore = create(
  persist(
    (set) => ({
      ...initialState,
      setUserInfo: (payload) =>
        set(({ userInfo }) => ({
          userInfo: { ...userInfo, ...payload },
        })),

      setIsLogin: (isLogin) =>
        set({
          isLogin: isLogin,
        }),

      removeUserInfo: () =>
        set(
          ({ setUserInfo, removeUserInfo, setIsLogin }) => ({
            ...initialState,
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
