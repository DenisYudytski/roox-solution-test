import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";
import userProfileReducer from "./reducers/userProfile";


export const store = configureStore({
	reducer: {
		users: usersReducer,
		userProfile: userProfileReducer
	}
}, applyMiddleware(thunk))