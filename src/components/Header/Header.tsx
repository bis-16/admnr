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
          ПО ЭВМ "Предприятие". Вер.{version}
        </div>
        <div className={s.text}>
          {isAuth
            ? 'БСВВ-3М Настройщик. СССР. 1954'
            : 'БСВВ-3М Справочник. СССР. 1954'}
        </div>
        <div>_ХЗ_</div>
      </header>
  );
};

export default Header;