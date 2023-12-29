import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        deleteuser: (state, action) => {
            state.users.splice(action.payload, 1);
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        createuser: (state, action) => {
            state.users.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        // actions
    },
});

export const { deleteuser, createuser } = userSlice.actions;
export default userSlice.reducer;
