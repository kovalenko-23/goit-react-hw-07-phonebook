import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Filterlabel, FilterInput } from './ContactsFilter.styled';
import phoonebookActions from '../../redux/phonebook/phoonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Filterlabel>
        Find
        <FilterInput
          type="text"
          name="message"
          value={filter}
          onChange={e =>
            dispatch(phoonebookActions.changeFilter(e.currentTarget.value))
          }
        />
      </Filterlabel>
    </Wrapper>
  );
};

export default ContactsFilter;
