import React from 'react';
import s from './Keys.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";

const Keys = () => {


	const {isAuth, user} = useAppSelector((state: RootState) => state.profilePage)
	const {key} = useAppSelector((state: RootState) => state.keysPage)

	// {/*	key: {*/}
	// {/*	keyID: 1,*/}
	// {/*	program: {*/}
	// {/*	programID: 1,*/}
	// {/*	name: "Крипто про",*/}
	// {/*	version: 4*/}
	// {/*},*/}
	//
	// {/*	key: "xxx-xxx-xxx-xxx-xxx",*/}
	// {/*	userFName: "Василий",*/}
	// {/*	userMName: "Иванович",*/}
	// {/*	userSName: "Пупкин",*/}
	// {/*	sb: 13,*/}
	// {/*	inventory: "ВА9231",*/}
	// {/*	setupDate: '13.02.2022',*/}
	// {/*	expDate: '13.02.2025',*/}
	// {/*},*/}

	return (
		<div>
			<div style={
				{
					display:"flex",
					justifyContent:"space-around",
					marginRight:"5px"
				}
			}>
				<div>[КНПК_ПО_КРИПТО_ПРО]</div>
				<div>[КНПК_ПО_КРИПТО_АРМ]</div>
				<div>[КНПК_ПО_ПРЕКРАСНЫЙ_ЧИТАТЕЛЬ]</div>
				<div>[КНПК_АНТИВИРУС_НИИ_Е.В.КАСПЕРСКОГО]</div>
			</div>

			<table className={s.table}>

				<thead>
					<tr>
						<th className={s.thNum}>Пор.<p>ном.</p></th>
						<th className={s.thKey}>Ключ ПО ЭВМ</th>
						<th className={``}>Версия<p>ПО ЭВМ</p></th>
						<th className={``}>Пользователь<p>( Фамилия )</p></th>
						<th className={``}>Пользователь<p>( Имя )</p></th>
						<th className={``}>Пользователь<p>( Отчество )</p></th>
						<th className={``}>Порядковый номер<p>ЭВМ</p></th>
						<th className={``}>Инвентарный номер<p>ЭВМ</p></th>
						<th className={``}>Ввод в <p>эксплуатацию</p></th>
						<th className={``}>Вывод из <p>эксплуатации</p></th>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td className={s.center}>{key.keyID}</td>
						<td className={s.center}>{key.key}</td>
						<td className={s.center}>{key.program.version}</td>
						<td className={s.center}>{key.userSName}</td>
						<td className={s.center}>{key.userFName}</td>
						<td className={s.center}>{key.userMName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inventory}</td>
						<td className={s.center}>{key.setupDate}</td>
						<td className={s.center}>{key.expDate}</td>
					</tr>
					<tr>
						<td className={s.center}>{key.keyID}</td>
						<td className={s.center}>{key.key}</td>
						<td className={s.center}>{key.program.version}</td>
						<td className={s.center}>{key.userSName}</td>
						<td className={s.center}>{key.userFName}</td>
						<td className={s.center}>{key.userMName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inventory}</td>
						<td className={s.center}>{key.setupDate}</td>
						<td className={s.center}>{key.expDate}</td>
					</tr>
					<tr>
						<td className={s.center}>{key.keyID}</td>
						<td className={s.center}>{key.key}</td>
						<td className={s.center}>{key.program.version}</td>
						<td className={s.center}>{key.userSName}</td>
						<td className={s.center}>{key.userFName}</td>
						<td className={s.center}>{key.userMName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inventory}</td>
						<td className={s.center}>{key.setupDate}</td>
						<td className={s.center}>{key.expDate}</td>
					</tr>
					<tr>
						<td className={s.center}>{key.keyID}</td>
						<td className={s.center}>{key.key}</td>
						<td className={s.center}>{key.program.version}</td>
						<td className={s.center}>{key.userSName}</td>
						<td className={s.center}>{key.userFName}</td>
						<td className={s.center}>{key.userMName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inventory}</td>
						<td className={s.center}>{key.setupDate}</td>
						<td className={s.center}>{key.expDate}</td>
					</tr>
					<tr>
						<td className={s.center}>{key.keyID}</td>
						<td className={s.center}>{key.key}</td>
						<td className={s.center}>{key.program.version}</td>
						<td className={s.center}>{key.userSName}</td>
						<td className={s.center}>{key.userFName}</td>
						<td className={s.center}>{key.userMName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inventory}</td>
						<td className={s.center}>{key.setupDate}</td>
						<td className={s.center}>{key.expDate}</td>
					</tr>
				</tbody>

			</table>
		</div>
	);
};

export default Keys;