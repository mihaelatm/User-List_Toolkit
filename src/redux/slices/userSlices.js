import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    updateUser(state, action) {
      const { id, updatedData } = action.payload;

      state.users = state.users.map((user) => {
        return user.id === id ? { ...user, ...updatedData } : user;
      });
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
