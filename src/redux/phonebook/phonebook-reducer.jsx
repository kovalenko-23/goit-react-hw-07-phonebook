import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phoonebook-actions';

const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const contacts = createReducer(initialState, {
  [actions.onSubmitForm]: (state, { payload }) => {
    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload.id);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
