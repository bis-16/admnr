import React from 'react';
import s0 from '../../App.module.scss'
import {TEL_ROUTE_ADM} from "../../const";
import {useNavigate} from 'react-router-dom';

const Sites = () => {

	const navigate = useNavigate()

	return (
		<div className={s0.wrapper__sites}>

			<div className={`${s0.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_ADM)
					 }}
			>
				Сайт Совета депутатов Новосибирского района (nrdeputat.nso.ru)
			</div>
			<div className={`${s0.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_ADM)
					 }}
			>
				Сайт МКУ "Управление образования Новосибирского района" (edunor.nso.ru)
			</div>
			<div className={`${s0.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_ADM)
					 }}
			>
				Сайт Администрации Новосибирского района (nsr.nso.ru)
			</div>

			<div className={`${s0.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_ADM)
					 }}
			>
				Информационно-аналитическое издание Новосибирский_район - Территория Развития (нртр.рф)
			</div>
			<div className={`${s0.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_ADM)
					 }}
			>
				СЭДД Правительства НСО - внутренний контур (cm.nso.ru)
			</div>
			<div className={`${s0.btn}`}
					 onClick={()=>{
						 navigate(TEL_ROUTE_ADM)
					 }}
			>
				СЭДД Правительства НСО - внешний контур (sedd-cm.nso.ru)
			</div>
			<a className={`${s0.btn}`} href={"https://owa.nso.ru/owa"}>
				Почта Правительства НСО (owa.nso.ru)
			</a>


		</div>
	);
};

export default Sites;