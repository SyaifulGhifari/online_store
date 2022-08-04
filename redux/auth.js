import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    token: '',
    role: null,
    id: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.id = action.payload.id;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.token = '';
      state.role = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
