import { FC, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';

import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (text: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const query: string = e.currentTarget.input.value.trim();
    e.preventDefault();
    if (query === '') {
      toast.error('Write some text');
      return;
    }
    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-right" />
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <CiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;