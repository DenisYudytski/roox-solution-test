import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
	name: "users",
	initialState: {
		users: [],
		usersLoading: null
	},
	reducers: {
		addUsers: (state, action) => {
			state.users = [...state.users, ...action.payload]
		},
		setUsersLoading: (state, action) => {
			state.usersLoading = action.payload
		},
		sortingUsers: (state, action) => {
			if (action.payload === 'city') {
				state.users.sort((a, b) => {
					if (a.address.city > b.address.city) {
						return 1
					} else if (a.address.city < b.address.city) {
						return -1
					} else return 0
				})
			}
			if (action.payload === 'company') {
				state.users.sort((a, b) => {
					if (a.company.name > b.company.name) {
						return 1
					} else if (a.company.name < b.company.name) {
						return -1
					} else return 0
				})
			}
		}
	}
})

export const { addUsers, setUsersLoading, sortingUsers } = usersSlice.actions
export default usersSlice.reducer