import React, {FC} from 'react';
import s0 from '../../App.module.scss'
import s from './NavBar.module.scss'
import NavButtons from "./NavButtons";
import Music, {MusicProps} from "../Music/Music";

const NavBar:FC<MusicProps> = ({music}) => {
  return (
    <div className={`${s0.wrapper__leftBlock}`}>
      <div className={`${s0.wrapper} ${s0.wrapper__navBar} ${s0.wrapper__navBar_top}`}>
        <NavButtons/>
      </div>
      <div className={`${s0.wrapper} ${s0.wrapper__navBar} ${s0.wrapper__navBar_bottom}`}>
        <Music music={music}/>
      </div>
    </div>
  );
};

export default NavBar;