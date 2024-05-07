import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducers from "../reducers/favoritesReducers";
import companyReducers from "../reducers/companyReducers";

const rootReducer = combineReducers({
  favorites: favoriteReducers,
  company: companyReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
