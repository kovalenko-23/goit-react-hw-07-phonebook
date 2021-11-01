import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import phoonebookActions from '../../redux/phonebook/phoonebook-actions';
import { Form, Label, Input, ButtonAdd } from './ContactsForm.styled';

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsNamesArr = contacts.map(contact => contact.name);

  const handleOnSubmitForm = (name, number) =>
    dispatch(phoonebookActions.onSubmitForm(name, number));

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts !== [] && contactsNamesArr.includes(name)) {
      toast.error(`You already have ${name} in your contacts!`);
      return;
    }
    handleOnSubmitForm(name, number);
    toast.success(`${name} added to your contacts!`);
    resetSate();
  };

  const resetSate = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label bottom>
        Number
        <Input
          autoComplete="off"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <ButtonAdd type="submit">Add to contacts</ButtonAdd>
    </Form>
  );
}

export default ContactsForm;
