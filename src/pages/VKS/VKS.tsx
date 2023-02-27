import React, {FC} from 'react';
import s0 from '../../App.module.scss'
import s from './VKS.module.scss'
import {vksList} from "../../assets/vks-list";
import {Iconference} from "../../types/data";

interface CardProps {
	conference: Iconference
}

const VksCard: FC<CardProps> = ({conference}) => {

	return(

			<div className={`${s0.wrapper} ${s.card}`}>

				<div>Тема: {conference.theme}</div>

				<div>Код конференции: {conference.num}</div>
				<div>Пароль: {conference.pass}</div>

				<div className={s.btn}>
					<a href={conference.link} target="_blank">Подключиться</a>
				</div>

			</div>
	)
}

const VKS = () => {

	return (
		<div className={s.cards}>

			{vksList.map((conference,index) => (
				<VksCard key={conference.num}
							conference={conference}
				/>
				)
			)}


		</div>
	);
};

export default VKS;