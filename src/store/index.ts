import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"; // 示例子 reducer
import authReducer from "./features/authSlice"; // 示例子 reducer

// 配置 store
export const store = configureStore({
  reducer: {
    // 添加你的 reducer 模块
    counter: counterReducer, // 示例：计数器 reducer
    auth: authReducer, // 示例：认证 reducer
    // 其他 reducer 可以在这里添加
  },
  // 可选：启用 Redux DevTools
  devTools: process.env.NODE_ENV !== "production",
});

// 导出 RootState 和 AppDispatch 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;