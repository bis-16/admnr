import React from 'react';
import s0 from '../../App.module.scss'
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import {AUTH_ROUTE, version} from "../../const";
import AdminBar from "../AdminBar/AdminBar";

const Header = () => {

  const navigation = useNavigate()

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
        <div onClick={()=>navigation(AUTH_ROUTE)}>
          _ХЗ_
        </div>
      </header>
  );
};

export default Header;