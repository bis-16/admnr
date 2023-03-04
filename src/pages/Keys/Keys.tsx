import React, {useEffect} from 'react';
import s0 from '../../App.module.scss'
import s from './Keys.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";

const Keys = () => {


	const {isAuth, user} = useAppSelector((state: RootState) => state.profilePage)
	const {keys} = useAppSelector((state: RootState) => state.keysPage)

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
				<div className={s0.knpk}>[КНПК_ПО_КРИПТО_ПРО]</div>
				<div className={s0.knpk}>[КНПК_ПО_КРИПТО_АРМ]</div>
				<div className={s0.knpk}>[КНПК_ПО_ПРЕКРАСНЫЙ_ЧИТАТЕЛЬ]</div>
				<div className={s0.knpk}>[КНПК_АНТИВИРУС_НИИ_Е.В.КАСПЕРСКОГО]</div>
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
				</tr>
				</thead>

				<tbody>

				{keys.map((key, index) => (
					<tr>
						<td className={s.center}>{key.keyID}</td>
						{isAuth && user.admin
							? <td className={s.center}>[НЕТ_ПРАВ]</td>
							: <td className={s.center}>{key.key}</td>}

						<td className={s.center}>{key.program.version}</td>
						<td className={s.center}>{key.userSName}</td>
						<td className={s.center}>{key.userFName}</td>
						<td className={s.center}>{key.userMName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inventory}</td>
						<td className={s.center}>{key.setupDate}</td>
						<td className={s.center}>{key.expDate}</td>
					</tr>
				))}
				</tbody>

			</table>
		</div>
	);
};

export default Keys;