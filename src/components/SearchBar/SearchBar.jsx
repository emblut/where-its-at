import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css';

function SearchBar() {
  return (
    <form className='search'>
      <input aria-label='search' className='search__input' type='text' />
      <button aria-label='submit-search' className='search__btn'>
        <FontAwesomeIcon
          className='search__icon-wrapper'
          icon={faMagnifyingGlass}
          size='lg'
        />
      </button>
    </form>
  );
}

export default SearchBar;
