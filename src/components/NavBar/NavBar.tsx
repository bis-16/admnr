import React from 'react';
import s from './NavBar.module.scss'
import NavButtons from "./NavButtons";

const NavBar = () => {
	return (
		<div className={s.wrapper}>
			NavBar
			<NavButtons/>
		</div>
	);
};

export default NavBar;