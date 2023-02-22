import React from 'react';
import s0 from '../../App.module.scss'
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";

const Header = () => {
	return (
		<header className={s0.header}>
			<div className={s.header}>
				<NavBar />
			</div>
			Header
		</header>
	);
};

export default Header;