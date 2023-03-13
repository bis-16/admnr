import React, {useEffect, useState} from 'react';
import {TelTable} from "./TelTable";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import styleTable from "../Keys/Keys.module.scss";
import s0 from "../../App.module.scss";
import {fetchKeys, fetchSoftwares} from "../../api/keysAPI";
import {setDepartments, setEmployees} from "../../store/reducers/employees-reducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchDepartments} from "../../api/empsAPI";

const TelAdm = () => {

	const dispatch = useAppDispatch()

	const {isAuth, user} = useAppSelector((state: RootState) => state.profilePage)
	const {employees, departments} = useAppSelector((state: RootState) => state.telsPage)
	const [modalFlag, setModalFlag] = useState<boolean>(false)

	/*modals*/
	const [delVisible, setDelVisible] = useState<boolean>(false)
	const [modifyVisible, setModifyVisible] = useState<boolean>(false)

	useEffect(() => {
		// console.log("useEffect []")
		fetchDepartments().then(value => {
			// console.log("useEffect.fetchSoftwares > value=", value)
			dispatch(setDepartments(value))
		})
		fetchKeys(0, 1, 3).then(value => {
			console.log("useEffect.fetchKeys >! value=", value)
			console.log("useEffect.fetchKeys >! value.rows=", value.rows)
			// dispatch(setEmployees(value.rows))
			// 	// dispatch(setTotalCount(value.count))
		})
	}, [])

	return (
		<div>
			{departments.map( (item) => (
				<div>{item.name}</div>
			)
			)}

			{/*<TelTable arr={kspList}/>*/}


			{/*<table className={styleTable.table}>*/}

			{/*	<thead>*/}
			{/*	<tr>*/}
			{/*		/!*<th className={s.thNum}>Пор.<p>ном.</p></th>*!/*/}
			{/*		<th className={``}>Фамилия</th>*/}
			{/*		<th className={``}>Имя</th>*/}
			{/*		<th className={``}>Отчество</th>*/}
			{/*		<th className={``}>Должность</th>*/}
			{/*		<th className={``}>Телефон</th>*/}
			{/*		<th className={``}>Телефон внутр.</th>*/}
			{/*		<th className={``}>Эл.почта</th>*/}
			{/*		<th className={``}>Местонахождение</th>*/}
			{/*		<th className={``}>Кабинет</th>*/}
			{/*		{isAuth && user.admin ? <th>/</th> : ''}*/}
			{/*		{isAuth && user.admin ? <th>X</th> : ''}*/}
			{/*	</tr>*/}
			{/*	</thead>*/}

			{/*	<tbody>*/}

			{/*	{arr.map((item,index)=>(*/}
			{/*		<tr>*/}
			{/*			/!*<td className={s.center}>0</td>*!/*/}
			{/*			<td className={styleTable.center}>{item.lName}</td>*/}
			{/*			<td className={styleTable.center}>{item.fName}</td>*/}
			{/*			<td className={styleTable.center}>{item.sName}</td>*/}
			{/*			<td className={styleTable.center}>{item.grade}</td>*/}
			{/*			<td className={styleTable.center}>{item.tel}</td>*/}
			{/*			<td className={styleTable.center}>{item.inTel}</td>*/}
			{/*			<td className={styleTable.center}>{item.eMail}</td>*/}
			{/*			<td className={styleTable.center}>{item.address}</td>*/}
			{/*			<td className={styleTable.center}>{item.room}</td>*/}
			{/*			{*/}
			{/*				isAuth && user.admin*/}
			{/*					? <td className={s0.knpk}*/}
			{/*								onClick={() => {*/}
			{/*									// setModifyVisible(true)*/}
			{/*									// setModalFlag(true)*/}
			{/*									// dispatch(setActiveKey(key))*/}
			{/*								}}>*/}
			{/*						/*/}
			{/*					</td>*/}
			{/*					: ''*/}
			{/*			}*/}
			{/*			{*/}
			{/*				isAuth && user.admin*/}
			{/*					? <td className={s0.knpk}*/}
			{/*								onClick={() => {*/}
			{/*									// setDelVisible(true)*/}
			{/*									// setModalFlag(true)*/}
			{/*									// dispatch(setActiveKey(key))*/}
			{/*								}}*/}
			{/*					>*/}
			{/*						X*/}
			{/*					</td>*/}
			{/*					: ''*/}
			{/*			}*/}
			{/*		</tr>*/}
			{/*	))}*/}

			{/*	</tbody>*/}

			{/*</table>*/}


			{isAuth && user.admin && modalFlag ?
				<div>
					{/*<ModifyKey show={modifyVisible} onHide={() => setModifyVisible(false)}/>*/}
					{/*<DelEmp show={delVisible} onHide={() => setDelVisible(false)}/>*/}
				</div>
				: ''
			}
		</div>
	);
};

export default TelAdm;