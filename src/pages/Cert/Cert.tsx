import React from 'react';
import zayac from "../../assets/img/zayac403.png";
import s0 from "../../App.module.scss";

const Cert = () => {
	return (
		<div className={s0.wrapper__cert}>
			<img src={zayac} className={s0.zayac} alt="Робозаяц"/>
			<div>Доступ запрещён.</div>
		</div>
	);
};

export default Cert;