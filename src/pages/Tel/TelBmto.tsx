import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {ERROR_ROUTE} from "../../const";
import {TelTable} from "./TelTable";
import {bmtoList} from "../../assets/tel/bmto-list";

const TelBmto = () => {

	const navigation = useNavigate()
	useEffect(()=>{navigation(ERROR_ROUTE)},[])

	return (
		<div>
			<TelTable arr={bmtoList}/>
		</div>
	)

}

export default TelBmto;