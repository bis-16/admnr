import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {ERROR_ROUTE} from "../../const";

const TelBmto = () => {

	const navigation = useNavigate()
	useEffect(()=>{navigation(ERROR_ROUTE)},[])

	return (
		<div>

		</div>
	)

}

export default TelBmto;