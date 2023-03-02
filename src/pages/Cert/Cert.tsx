import React from 'react';
import zayac from "../../assets/img/zayac.png";
import e403 from "../../assets/img/403.png";
import s0 from "../../App.module.scss";

const Cert = () => {
	return (
		<div className={s0.wrapper__cert}>
			<img src={zayac} className={s0.zayac} alt="Робозаяц"/>
			<img src={e403} className={s0.zayac} alt="403"/>
			<div>Доступ запрещён.</div>
		</div>
	);
};

export default Cert;