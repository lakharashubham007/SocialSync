import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

/**
 * Redux Store Configuration
 *
 * This module configures the Redux store using the `@reduxjs/toolkit` library.
 *
 */
// Configure the Redux store
const store = configureStore({
  reducer: rootReducer, // The root reducer to manage the application's state
});

// Destructure the 'dispatch' function from the store
const { dispatch } = store;

// Export the configured Redux store and the 'dispatch' function
export { store, dispatch };
