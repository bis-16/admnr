import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import {kspList} from "../../assets/tel/ksp-list";
import {TelTable} from "./TelTable";

const TelKsp = () => {

	// const {sovdepList} = useAppSelector((state: RootState) => state.TelPage)

	return (
		<div>
			<TelTable arr={kspList}/>
		</div>
	);
};

export default TelKsp;