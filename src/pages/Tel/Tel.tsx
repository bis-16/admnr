import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {TEL_ROUTE, TEL_ROUTE_ADM, TEL_ROUTE_SOVDEP} from "../../const";
import s from './Tel.module.scss'

const Tel = () => {

	const navigate = useNavigate()

	return (
		<div>

			<div className={`${s.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_ADM)
					 }}
			>
				[КНПК_АДМ]
			</div>

			<div className={`${s.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE)
					 }}
			>
				[КНПК_ПОДВЕДЫ]
			</div>

			<div className={`${s.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_SOVDEP)
					 }}
			>
				[КНПК_СОВЕТ_ДЕПУТАТОВ]
			</div>

		</div>
	);
};

export default Tel;