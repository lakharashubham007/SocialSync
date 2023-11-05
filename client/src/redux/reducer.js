import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./postSlice"; // Import the user reducer slice
import themeSlice from "./theme"; // Import the theme reducer slice
import postSlice from "./postSlice"; // Import the post reducer slice

/**
 * Redux Root Reducer
 *
 * This module combines and exports multiple reducer slices using `@reduxjs/toolkit`.
 * It creates the root reducer for the Redux store by combining individual reducer slices.
 *
 * @module
 */

// Combine the reducer slices into the root reducer
const rootReducer = combineReducers({
  user: userSlice, // User-related state managed by the userSlice reducer
  theme: themeSlice, // Theme-related state managed by the themeSlice reducer
  posts: postSlice, // Post-related state managed by the postSlice reducer
});

// Export the root reducer
export { rootReducer };
