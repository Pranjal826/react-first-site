import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  loggedInUser: null,
  displayedUser: null, 
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createuser: (state, action) => {
      const newUser = { ...action.payload, id: state.users.length };
      state.users.push(newUser);
      state.loggedInUser = newUser;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    loginuser: (state, action) => {
      const loggedInUser = action.payload;
      state.loggedInUser = loggedInUser;
    },
    showuser: (state, action) => {
        const userId = action.payload;
        state.displayedUser = state.users.find((user) => user.id === userId);
        console.log(userId)
      },    
      deleteuser: (state, action) => {
        state.users.splice(action.payload, 1);
        localStorage.setItem("users", JSON.stringify(state.users));
    },  
  },
});

export const { loginuser, createuser, showuser,deleteuser } = userSlice.actions;
export default userSlice.reducer;
