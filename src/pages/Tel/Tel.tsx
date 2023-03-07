import React, {FC, useState} from 'react';
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
import {telRoutes, telRoutes_Ss} from '../../routes'
import styleTable from "../Keys/Keys.module.scss";
import arrowUp from "../../assets/img/arrow_white_up.png";
import arrowDown from "../../assets/img/arrow_white_down.png";
import {vksListVinteo} from "../../assets/vks-list";

const BtnGenerator = () => {

}


const Tel = () => {
	const navigate = useNavigate()

	const [isOpenSs, setOpenSs] = useState<boolean>(false)

	return (
		<div className={s0.wrapper__tel}>
			{telRoutes.map((item, index) => (
					<div className={`${s0.btn}`}
							 onClick={() => {
								 navigate(item.path)
							 }}
					>
						{item.disable
							? <div>
								<span style={{color: "darkred"}}>[ ОТКЛ ] </span>
								<span style={{color: "darkred"}}>{item.name}</span>
							</div>
							: item.name}
					</div>
				)
			)}

			<div>
			<div className={s0.btn}
					 onClick={() => {
						 setOpenSs(!isOpenSs)
					 }}
			>
				Cельсоветы Новосибирского района
				<img src={isOpenSs ? arrowUp : arrowDown} className={s0.btn__arrow}/>
			</div>
			{telRoutes_Ss.map((item, index) => (
					<div>

						<div className={`${s.cards} ${isOpenSs ? '' : s0.visuallyHidden}`}>

							<div className={`${s0.btn}`}
									 onClick={() => {
										 navigate(item.path)
									 }}
							>
								{item.disable
									? <div>
										<span style={{color: "darkred"}}>[ ОТКЛ ] </span>
										<span style={{color: "darkred"}}>{item.name}</span>
									</div>
									: item.name}
							</div>

						</div>
					</div>
				)
			)}
			</div>


		</div>
	);
};

export default Tel;