import React, {FC} from 'react';
import zayac from '../../assets/img/zayac.png'
import s0 from '../../App.module.scss'

interface ErrorProps{
  message: string
}

const ErrorPage:FC<ErrorProps> = ({message}) => {
  return (
    <div className={s0.wrapper__error}>
     <img src={zayac} className={s0.zayac} alt="Робозаяц"/>
      <div>Ошибка: {message}</div>
    </div>
  );
};

export default ErrorPage;