import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';
import ContactsForm from './Components/ContactsForm/ContactsForm';
import ContactsList from './Components/ContactList/ContactsList';
import ContactsFilter from './Components/ContactsFilter/ContactsFilter';

const Wrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export function App() {
  return (
    <Wrapper>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactsList />
    </Wrapper>
  );
}

export default App;
