import React from 'react';
import {TelTable} from "./TelTable";
import {ufinList} from "../../assets/tel/ufin-list";



const TelUfin = () => {
	return (
		<div>
			<TelTable arr={ufinList}/>
		</div>
	);
};

export default TelUfin;