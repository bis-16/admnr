import React, {useEffect, useState} from 'react';
import s0 from '../../App.module.scss'
import s from './Keys.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import CreateKey from "../../components/Modals/CreateKey";
import DelKey from "../../components/Modals/DelKey";
import CreateSoft from "../../components/Modals/CreateBrand";
import ModifyKey from "../../components/Modals/ModifyKey";
import {Ikey} from "../../types/data";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setActiveSoft, setActiveKey} from "../../store/reducers/keys-reducer";

const Keys = () => {

	const dispatch = useAppDispatch()

	const {isAuth, user} = useAppSelector((state: RootState) => state.profilePage)
	const {keys} = useAppSelector((state: RootState) => state.keysPage)

	/*modals*/
	const [delVisible, setDelVisible] = useState<boolean>(false)
	const [modifyVisible, setModifyVisible] = useState<boolean>(false)
	// const [keyForDel, setKeyForDel] = useState<Ikey>(null)
	// const [modifyNum, setModifyNum] = useState<number>(0)
	const [modalFlag, setModalFlag] = useState<boolean>(false)


	useEffect(() => {
	}, [])

	return (
		<div>
			<div style={
				{
					display: "flex",
					justifyContent: "space-around",
					marginRight: "5px"
				}
			}>
				<div className={`${s0.btn}`}>[КНПК_ПО_КРИПТО_ПРО]</div>
				<div className={s0.btn}>[КНПК_ПО_КРИПТО_АРМ]</div>
				<div className={s0.btn}>[КНПК_ПО_ПРЕКРАСНЫЙ_ЧИТАТЕЛЬ]</div>
				<div className={s0.btn}>[КНПК_АНТИВИРУС_НИИ_Е.В.КАСПЕРСКОГО]</div>
			</div>

			<table className={s.table}>

				<thead>
				<tr>
					<th className={s.thNum}>Пор. ном.</th>
					<th className={s.thKey}>Ключ ПО ЭВМ</th>
					<th className={``}>Версия ПО ЭВМ</th>
					<th className={``}>Пользователь (Фамилия)</th>
					<th className={``}>Пользователь (Имя)</th>
					<th className={``}>Пользователь (Отчество)</th>
					<th className={``}>Порядковый номер ЭВМ</th>
					<th className={``}>Инвентарный номер ЭВМ</th>
					<th className={``}>Ввод в эксплуатацию</th>
					<th className={``}>Вывод из эксплуатации</th>
					{isAuth && user.admin ? <th>/</th> : ''}
					{isAuth && user.admin ? <th>X</th> : ''}
				</tr>
				</thead>

				<tbody>

				{keys.map((key, index) => (
					<tr>
						<td className={s.center}>{key.keyID}</td>

						{isAuth && user.admin
							? <td className={s.center}>{key.key}</td>
							: <td className={s.center}>[НЕТ_ПРАВ]</td>}

						<td className={s.center}>{key.software.version}</td>
						<td className={s.center}>{key.userFName}</td>
						<td className={s.center}>{key.userMName}</td>
						<td className={s.center}>{key.userLName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inventory}</td>
						<td className={s.center}>{key.setupDate}</td>
						<td className={s.center}>{key.expDate}</td>
						{
							isAuth && user.admin
							? <td className={s0.knpk}
										onClick={() => {
											setModifyVisible(true)
											setModalFlag(true)
											dispatch(setActiveKey(key))
										}}>
								/
							</td>
							: ''
						}
						{
							isAuth && user.admin
								? <td className={s0.knpk}
											onClick={() => {
												setDelVisible(true)
												setModalFlag(true)
												dispatch(setActiveKey(key))
											}}
								>
									X
								</td>
								: ''
						}
					</tr>
				))}
				</tbody>

			</table>

			{isAuth && user.admin && modalFlag ?
				<div>
					<ModifyKey show={modifyVisible} onHide={() => setModifyVisible(false)}/>
					<DelKey show={delVisible} onHide={() => setDelVisible(false)}/>
				</div>
				: ''
			}

		</div>
	);
};

export default Keys;