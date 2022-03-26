import { createSlice } from "@reduxjs/toolkit";


const userProfileSlice = createSlice({
	name: "userProfile",
	initialState: {
		userProfile: null
	},
	reducers: {
		getUserProfile: (state, action) => {
			state.userProfile = action.payload
		}
	}
})

export const { getUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer