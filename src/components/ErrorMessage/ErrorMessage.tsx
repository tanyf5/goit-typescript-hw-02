import { FC } from 'react';
import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  errorMes: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errorMes }) => {
  return (
    <div className={css.error}>
      <p>Something wrong 😢 please reload page</p>
      <p>{errorMes}</p>
    </div>
  );
};

export default ErrorMessage;