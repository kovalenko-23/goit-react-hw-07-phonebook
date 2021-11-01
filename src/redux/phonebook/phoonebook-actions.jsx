import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('phonebook/handleFinder');
const deleteContact = createAction('phonebook/deletetContact', (id, name) => ({
  payload: {
    id,
    name,
  },
}));
const onSubmitForm = createAction(
  'phonebook/handleOnSubmitForm',
  (name, number) => ({
    payload: { id: shortid.generate(), name, number },
  }),
);

const actions = { changeFilter, deleteContact, onSubmitForm };

export default actions;
