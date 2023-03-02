import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {ERROR_ROUTE} from "../../const";

const TelCmu = () => {

	const navigation = useNavigate()
	useEffect(()=>{navigation(ERROR_ROUTE)},[])

	return (
		<div>
		ЦМУ
		</div>
	)
}

export default TelCmu;