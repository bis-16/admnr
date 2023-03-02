import React, {FC} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
	TEL_ROUTE,
	TEL_ROUTE_ADM, TEL_ROUTE_BMTO, TEL_ROUTE_CMU,
	TEL_ROUTE_KSP,
	TEL_ROUTE_KULT,
	TEL_ROUTE_SH,
	TEL_ROUTE_SOVDEP, TEL_ROUTE_UK,
	TEL_ROUTE_UO
} from "../../const";
import s0 from '../../App.module.scss'
import s from './Tel.module.scss'
import {telRoutes} from '../../routes'
import styleTable from "../Keys/Keys.module.scss";

const BtnGenerator = () => {

}


const Tel = () => {
	const navigate = useNavigate()

	return (
		<div>
			{/*<table className={styleTable.table}>*/}

			{/*	<thead>*/}
			{/*	<tr>*/}
			{/*		<th className={``}>Фамилия</th>*/}
			{/*		<th className={``}>Имя</th>*/}
			{/*	</tr>*/}
			{/*	</thead>*/}

			{/*	<tbody>*/}
				{telRoutes.map((item, index) => (
					// <tr>
						<div className={`${s0.btn}`}
								 onClick={() => {
									 navigate(item.path)
								 }}
						>

								{/*<td className={styleTable.center}>*/}
									{item.disable
										? <div>
												<span style={{color:"darkred"}}>[ ОТКЛ ] </span>
												<span style={{color:"darkred"}}>{item.name}</span>
											</div>
										:	item.name}
								{/*</td>*/}
								{/*<td className={styleTable.center}>*/}
								{/*</td>*/}
								{/*<td className={styleTable.center}>*/}
								{/*	{item.fullname}*/}
								{/*</td>*/}
						</div>
					// </tr>
					)
				)}
				{/*</tbody>*/}
			{/*</table>*/}

		</div>
	);
};

export default Tel;