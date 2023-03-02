import React from 'react';
import {TelTable} from "./TelTable";
import s0 from "../../App.module.scss";
import {ukList, ukList_auto, ukList_edds, ukList_it, ukList_transport, ukList_zakup} from "../../assets/tel/uk-list";



const TelUk = () => {
	return (
		<div className={s0.wrapper__tel}>

			<TelTable arr={ukList} />

			<div className={s0.tel__title}>Отдел информационных технологий</div>
			<TelTable arr={ukList_it} />

			<div className={s0.tel__title}>Отдел Муниципального заказа</div>
			<TelTable arr={ukList_zakup} />

			<div className={s0.tel__title}>Автодорожный отдел</div>
			<TelTable arr={ukList_auto} />

			<div className={s0.tel__title}>Транспортный отдел</div>
			<TelTable arr={ukList_transport} />

			<div className={s0.tel__title}>ЕДДС</div>
			<TelTable arr={ukList_edds} />
		</div>
	);
};

export default TelUk;