import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import PhoneBookReducer from './phonebook/phonebook-reducer';
import { contactsApi } from './ContactSlice';

export const store = configureStore({
  reducer: {
    phoneBook: PhoneBookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
