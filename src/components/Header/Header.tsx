import React from 'react';
import s0 from '../../App.module.scss'
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import {version} from "../../const";

const Header = () => {

  const {isAuth} = useAppSelector((state: RootState) => state.profilePage)

  return (
      <header className={`${s0.wrapper} ${s0.wrapper__header}`}>
        <div className={s.siteName}>
          Предприятие {version}
        </div>
        <div className={s.text}>
          {isAuth
            ? 'БСВВ Настройщик. СССР. 1954'
            : 'БСВВ Справочник. СССР. 1954'}
        </div>
        <div>ХЗ_</div>
      </header>
  );
};

export default Header;