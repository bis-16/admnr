import React, {FC, useState} from 'react';
import s0 from '../../App.module.scss'
import s from './VKS.module.scss'
import {vksListJazz, vksListVinteo} from "../../assets/vks-list";
import {Iconference} from "../../types/data";
import arrowUp from "../../assets/img/arrow_white_up.png"
import arrowDown from "../../assets/img/arrow_white_down.png"

interface CardProps {
	conference: Iconference
}

const VksCard: FC<CardProps> = ({conference}) => {

	return (

		<div className={`${s0.wrapper} ${s.card}`}>

			<div>Тема: {conference.theme}</div>

			<div>Код конференции: {conference.num}</div>
			<div>Пароль: {conference.pass}</div>

				<a className={s0.btn} href={conference.link} target="_blank">Подключиться</a>

		</div>
	)
}

const VKS = () => {

	const [isOpenAdm, setOpenAdm] = useState<boolean>(false)
	const [isOpenNSO, setOpenNSO] = useState<boolean>(false)

	return (
		<div className={s0.wrapper__vks}>

			<div className={s0.btn}
					 onClick={() => {
						 setOpenAdm(!isOpenAdm)
					 }}
			>
				ВКС администрации Новосибирского района (СберДжаз)
				<img src={isOpenAdm ? arrowUp : arrowDown} className={s0.btn__arrow}/>
			</div>

			<div className={`${s.cards} ${isOpenAdm ? '' : s0.visuallyHidden}`}>
				{vksListJazz.map((conference, index) => (
						<VksCard key={conference.num}
										 conference={conference}
						/>
					)
				)}
			</div>

			<div className={s0.btn}
					 onClick={() => {
						 setOpenNSO(!isOpenNSO)
					 }}
			>
				ВКС правительства Новосибирской области (Vinteo)
				<img src={isOpenNSO ? arrowUp : arrowDown} className={s0.btn__arrow}/>
			</div>
			<div className={`${s.cards} ${isOpenNSO ? '' : s0.visuallyHidden}`}>
				{vksListVinteo.map((conference, index) => (
						<VksCard key={conference.num}
										 conference={conference}
						/>
					)
				)}
			</div>

		</div>
	);
};

export default VKS;