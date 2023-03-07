import React, {useState} from 'react';
import s0 from '../../App.module.scss'
import CreateDevice from "../Modals/CreateKey";
import CreateKey from "../Modals/CreateKey";
import CreateSoft from "../Modals/CreateBrand";
import arrowUp from "../../assets/img/arrow_white_up.png"
import arrowDown from "../../assets/img/arrow_white_down.png"
import {isVisible} from "@testing-library/user-event/dist/utils";

const AdminBar = () => {

	/* modals */
	const [softVisible, setSoftVisible] = useState<boolean>(false)
	const [keyVisible, setKeyVisible] = useState<boolean>(false)

	const [barVisible, setBarVisible] = useState<boolean>(true)

	const barToggle = () => {
		setBarVisible(!barVisible)
	}

	return (
		<div>
			<div className={s0.adminBar__arrow}
					 onClick={() => barToggle()}
			>
				{barVisible
					? <img height={"100%"} src={arrowUp}/>
					: <img height={"100%"} src={arrowDown}/>}
			</div>

			<div className={`${s0.wrapper__adminBar} ${barVisible ? '' : s0.visuallyHidden}`}>
				{/*<div className={s0.buttonsBlock}>*/}
				<div className={s0.btn}>
					[ ОТКЛ ] Добавить новость
				</div>
				{/*<div className={s0.btn}>*/}
				{/*	[ОТКЛ] Удалить новость*/}
				{/*</div>*/}
				{/*</div>*/}

				{/*<div className={s0.buttonsBlock}>*/}
				<div className={s0.btn}>
					[ ОТКЛ ] Добавить ЭЦП
				</div>
				{/*<div className={s0.btn}>*/}
				{/*	[ОТКЛ] Удалить ЭЦП*/}
				{/*</div>*/}
				{/*</div>*/}

				<div className={s0.buttonsBlock}>
					<div className={s0.btn}
							 onClick={() => {
								 setSoftVisible(true)
							 }}>
						Добавить ПО
					</div>
					<div className={s0.btn}
							 onClick={() => {
								 setKeyVisible(true)
							 }}>
						Добавить ключ
					</div>
					{/*<div className={s0.btn}>*/}
					{/*	[ОТКЛ] Удалить ключ*/}
					{/*</div>*/}
				</div>

				{/*<div className={s0.buttonsBlock}>*/}
				<div className={s0.btn}>
					[ ОТКЛ ] Добавить абонента (Адм)
				</div>
				{/*<div className={s0.btn}>*/}
				{/*	[ОТКЛ] Удалить абонента (Адм)*/}
				{/*</div>*/}
				{/*</div>*/}


				<CreateSoft show={softVisible} onHide={() => setSoftVisible(false)}/>
				<CreateKey show={keyVisible} onHide={() => setKeyVisible(false)}/>
			</div>
		</div>
	);
};

export default AdminBar;