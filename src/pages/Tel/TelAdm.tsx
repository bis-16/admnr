import React from 'react';
import {TelTable} from "./TelTable";
import {kspList} from "../../assets/tel/ksp-list";

const TelAdm = () => {
	return (
		<div>
			<TelTable arr={kspList}/>
		</div>
	);
};

export default TelAdm;