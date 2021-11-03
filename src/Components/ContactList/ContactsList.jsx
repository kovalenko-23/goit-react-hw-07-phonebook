import { useSelector } from 'react-redux';
import ContactsItem from '../ContactsItem/ContactsItem';
import { List } from './ContactList.styled';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/ContactSlice';
// import phoonebookActions from '../../redux/phonebook/phoonebook-actions';
import {
  // getContacts,
  getFilter,
} from '../../redux/phonebook/phonebook-selectors';

const ContactsList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  // const dispatch = useDispatch();
  // const deleteContact = (id, name) =>
  //   dispatch(phoonebookActions.deleteContact(id, name));

  let visibleContacts = null;

  const getVisibleContacts = () => {
    if (!contacts) {
      return;
    }

    visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };

  getVisibleContacts();

  return (
    <>
      {contacts && (
        <List>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteButton={deleteContact}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactsList;
