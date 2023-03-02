import React from 'react';
import s0 from "../../App.module.scss";
import zayac from "../../assets/img/zayac403.png";

const AccessDenied = () => {
	return (
		<div className={s0.wrapper__403}>
			<img src={zayac} className={s0.zayac} alt="Робозаяц"/>
			<div>Доступ запрещён.</div>
		</div>
	);
};

export default AccessDenied;