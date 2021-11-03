import { useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Label, Input, ButtonAdd } from './ContactsForm.styled';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../../redux/ContactSlice';

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

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

    const contactsNamesArr = contacts.map(contact => contact.name);
    if (contacts !== [] && contactsNamesArr.includes(name)) {
      toast.error(`You already have ${name} in your contacts!`);
      return;
    }
    createContact({ name, number });
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
