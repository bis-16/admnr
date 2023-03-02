import React from 'react';
import {TelTable} from "./TelTable";
import s0 from "../../App.module.scss";
import {ukList, ukList_auto, ukList_edds, ukList_it, ukList_transport, ukList_zakup} from "../../assets/tel/uk-list";
import {shList} from "../../assets/tel/sh-list";



const TelSh = () => {
	return (
		<div className={s0.wrapper__tel}>

			<TelTable arr={shList} />

			{/*<div className={s0.tel__title}>Отдел информационных технологий</div>*/}
			{/*<TelTable arr={ukList_it} />*/}

		</div>
	);
};

export default TelSh;