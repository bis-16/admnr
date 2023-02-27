import React from 'react';
import s from "../Keys/Keys.module.scss";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import {sovdepList} from "../../assets/tel/sovdep-list";

const TelSovDep = () => {

	// const {sovdepList} = useAppSelector((state: RootState) => state.TelPage)

	return (
		<div>

			<table className={s.table}>

				<thead>
					<tr>
						{/*<th className={s.thNum}>Пор.<p>ном.</p></th>*/}
						<th className={``}>Фамилия</th>
						<th className={``}>Имя</th>
						<th className={``}>Отчество</th>
						<th className={``}>Должность</th>
						<th className={``}>Телефон</th>
						<th className={``}>Телефон<p>внутр.</p></th>
						<th className={``}>Эл.почта</th>
					</tr>
				</thead>

				<tbody>

				{sovdepList.map((item,index)=>(
					<tr>
						{/*<td className={s.center}>0</td>*/}
						<td className={s.center}>{item.lName}</td>
						<td className={s.center}>{item.fName}</td>
						<td className={s.center}>{item.sName}</td>
						<td className={s.center}>{item.grade}</td>
						<td className={s.center}>{item.tel}</td>
						<td className={s.center}>{item.inTel}</td>
						<td className={s.center}>{item.eMail}</td>
					</tr>
				))}

				</tbody>

			</table>
		</div>
	);
};

export default TelSovDep;