import { Contact, ContactItem, DeleteContactBtn } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const ContactsItem = ({ id, name, number, onDeleteButton }) => {
  const onClickDeleteButton = () => {
    toast.success(`${name} removed from your contacts`);
    onDeleteButton(id, name);
  };
  return (
    <Contact id={id}>
      <ContactItem>{name}:</ContactItem>
      <ContactItem>{number}</ContactItem>
      <DeleteContactBtn type="button" onClick={onClickDeleteButton}>
        Delete
      </DeleteContactBtn>
    </Contact>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteButton: PropTypes.func,
};
