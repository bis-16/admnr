import React from 'react';
import logo from "../../logo.svg";
import s from "./Main.module.scss"

const Main = () => {
	return (
		<div className={s.main__flexWrapper}>
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
			</div>
		</div>
	);
};

export default Main;