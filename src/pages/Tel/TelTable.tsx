import React, {FC} from 'react';
import styleTable from "../Keys/Keys.module.scss";
import {Iemp} from "../../types/data";

interface TelTableProps {
	arr: Iemp[];
}

export const TelTable: FC<TelTableProps> = ({arr}) => {
	return(
		<table className={styleTable.table}>

			<thead>
			<tr>
				{/*<th className={s.thNum}>Пор.<p>ном.</p></th>*/}
				<th className={``}>Фамилия</th>
				<th className={``}>Имя</th>
				<th className={``}>Отчество</th>
				<th className={``}>Должность</th>
				<th className={``}>Телефон</th>
				<th className={``}>Телефон внутр.</th>
				<th className={``}>Эл.почта</th>
				<th className={``}>Местонахождение</th>
				<th className={``}>Кабинет</th>
			</tr>
			</thead>

			<tbody>

			{arr.map((item,index)=>(
				<tr>
					{/*<td className={s.center}>0</td>*/}
					<td className={styleTable.center}>{item.lName}</td>
					<td className={styleTable.center}>{item.fName}</td>
					<td className={styleTable.center}>{item.sName}</td>
					<td className={styleTable.center}>{item.grade}</td>
					<td className={styleTable.center}>{item.tel}</td>
					<td className={styleTable.center}>{item.inTel}</td>
					<td className={styleTable.center}>{item.eMail}</td>
					<td className={styleTable.center}>{item.address}</td>
					<td className={styleTable.center}>{item.room}</td>
				</tr>
			))}

			</tbody>

		</table>
	)
}