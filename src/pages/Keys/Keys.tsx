import React, {useEffect, useState} from 'react';
import s0 from '../../App.module.scss'
import s from './Keys.module.scss'
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import CreateKey from "../../components/Modals/CreateKey";
import DelKey from "../../components/Modals/DelKey";
import CreateSoft from "../../components/Modals/CreateSoft";
import ModifyKey from "../../components/Modals/ModifyKey";
import {Ikey} from "../../types/data";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setActiveSoftware, setActiveKey, setSoft, setKeys} from "../../store/reducers/keys-reducer";
import {fetchKeys, fetchSoftwares} from "../../api/keysAPI";

const Keys = () => {

	const dispatch = useAppDispatch()

	const {isAuth, user} = useAppSelector((state: RootState) => state.profilePage)
	const {keys, activeSoftId, pagination, softwares} = useAppSelector((state: RootState) => state.keysPage)

	/*modals*/
	const [delVisible, setDelVisible] = useState<boolean>(false)
	const [modifyVisible, setModifyVisible] = useState<boolean>(false)
	// const [keyForDel, setKeyForDel] = useState<Ikey>(null)
	// const [modifyNum, setModifyNum] = useState<number>(0)
	const [modalFlag, setModalFlag] = useState<boolean>(false)
	const [activeBtn, setActiveBtn] =  useState<number>()


	useEffect(() => {
		// console.log("useEffect []")
		fetchSoftwares().then(value => {
			// console.log("useEffect.fetchSoftwares > value=", value)
			dispatch(setSoft(value))
		})
		fetchKeys(0, 1, 3).then(value => {
			console.log("useEffect.fetchKeys >! value=", value)
			console.log("useEffect.fetchKeys >! value.rows=", value.rows)
			dispatch(setKeys(value.rows))
		// 	// dispatch(setTotalCount(value.count))
		})
	}, [])

	useEffect(() => {
		fetchKeys(activeSoftId, pagination.currentPage, 3).then(value => {
			console.log("fetchSoftwares > value=", value)
			console.log("fetchSoftwares > value.rows=", value.rows)
			dispatch(setKeys(value.rows))
			// dispatch(setTotalCount(value.count))
		})
	}, [activeSoftId])

	return (
		<div>
			<div style={
				{
					display: "flex",
					justifyContent: "space-around",
					marginRight: "5px"
				}
			}>
				{/*<div className={`${s0.btn}`}>[????????_????_????????????_??????]</div>*/}
				{/*<div className={s0.btn}>[????????_????_????????????_??????]</div>*/}
				{/*<div className={s0.btn}>[????????_????_????????????????????_????????????????]</div>*/}
				{/*<div className={s0.btn}>[????????_??????????????????_??????_??.??.??????????????????????]</div>*/}
				{softwares.map((software, index) =>
				<div className={`${s0.btn} ${index === activeBtn ? s0.btn_active : ''}`}
						 onClick={(e) => {
							 console.log("click. now active is:", activeBtn)
							 dispatch(setActiveSoftware(software.id))
							 setActiveBtn(index)
						 }}
						 key={software.id}
				>
					{software.name}
				</div>
				)}

				{/*dispatch(setActiveBrand(brand.id))*/}
			</div>

			<table className={s.table}>

				<thead>
				<tr>
					<th className={s.thNum}>?????????? ????????????</th>
					<th className={s.thKey}>???????? ???? ??????</th>
					<th className={``}>???????????? ???? ??????</th>
					<th className={``}>???????????????????????? (??????????????)</th>
					<th className={``}>???????????????????????? (??????)</th>
					<th className={``}>???????????????????????? (????????????????)</th>
					<th className={``}>???????????????????? ?????????? ??????</th>
					<th className={``}>?????????????????????? ?????????? ??????</th>
					<th className={``}>???????? ?? ????????????????????????</th>
					<th className={``}>?????????? ???? ????????????????????????</th>
					{isAuth && user.admin ? <th>/</th> : ''}
					{isAuth && user.admin ? <th>X</th> : ''}
				</tr>
				</thead>

				<tbody>

				{keys.map((key, index) => (
					<tr>
						<td className={s.center}>{key.id}</td>

						{isAuth && user.admin
							? <td className={s.center}>{key.key}</td>
							: <td className={s.center}>[??????_????????]</td>}

						<td className={s.center}>{key.version}</td>
						<td className={s.center}>{key.fName}</td>
						<td className={s.center}>{key.mName}</td>
						<td className={s.center}>{key.lName}</td>
						<td className={s.center}>sb{key.sb}</td>
						<td className={s.center}>{key.inv}</td>
						<td className={s.center}>{key.inDate}</td>
						<td className={s.center}>{key.outDate}</td>
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