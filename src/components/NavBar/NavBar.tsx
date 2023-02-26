import React from 'react';
import s0 from '../../App.module.scss'
import s from './NavBar.module.scss'
import NavButtons from "./NavButtons";

const NavBar = () => {
  return (
    <div className={`${s0.wrapper__leftBlock}`}>
      <div className={`${s0.wrapper} ${s0.wrapper__navBar} ${s0.wrapper__navBar_top}`}>
        <NavButtons/>
      </div>
      <div className={`${s0.wrapper} ${s0.wrapper__navBar} ${s0.wrapper__navBar_bottom}`}>
        <NavButtons/>
      </div>
    </div>
  );
};

export default NavBar;