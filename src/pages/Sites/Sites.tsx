import React from 'react';
import s0 from '../../App.module.scss'
import {TEL_ROUTE_ADM} from "../../const";
import {useNavigate} from 'react-router-dom';
import mail from '../../assets/img/sites/mail.svg'
import gasu from '../../assets/img/sites/gasu.png'
import cm from '../../assets/img/sites/cm.ico'
import eis from '../../assets/img/sites/eis.svg'
import jkh from '../../assets/img/sites/jkh.png'
import gosuslugi from '../../assets/img/sites/gosuslugi.svg'
import admnr from '../../assets/img/sites/admnr.png'
import pos from '../../assets/img/sites/pos.png'
import nso from '../../assets/img/sites/nso.svg'
import eb from '../../assets/img/sites/eb.svg'
import rts from '../../assets/img/sites/rts.svg'

const Sites = () => {

	const navigate = useNavigate()

	return (
		<div className={s0.wrapper__sites}>

			<a className={`${s0.btn}`} href={"http://nsr.nso.ru"} target={'_blank'}>
				<img height={'25px'} src={admnr} />
				Сайт Администрации Новосибирского района (nsr.nso.ru)
			</a>

			<a className={`${s0.btn}`} href={"http://nrdeputat.nso.ru"} target={'_blank'}>
				Сайт Совета депутатов Новосибирского района (nrdeputat.nso.ru)
			</a>

			<a className={`${s0.btn}`} href={"http://kspnr.nso.ru"} target={'_blank'}>
				Сайт Контрольно-счётной палаты Новосибирского района (kspnr.nso.ru)
			</a>

			<a className={`${s0.btn}`} href={"http://edunor.nso.ru"} target={'_blank'}>
				Сайт МКУ "Управление образования Новосибирского района" (edunor.nso.ru)
			</a>

			<a className={`${s0.btn}`} href={"http://нртр.рф"} target={'_blank'}>
				Информационно-аналитическое издание "Новосибирский район - Территория Развития" (нртр.рф)
			</a>

			<a className={`${s0.btn}`} href={"http://cm.nso.ru:8080/cmj-web/"} target={'_blank'}>
				<img height={'25px'} src={cm}/>
				СЭДД Правительства НСО - внутренний контур (cm.nso.ru)
			</a>

			<a className={`${s0.btn}`} href={"http://sedd-cm.nso.ru:8080/cmj-web/"} target={'_blank'}>
				<img height={'25px'} src={cm} />
				СЭДД Правительства НСО - внешний контур (sedd-cm.nso.ru)
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://owa.nso.ru/owa"} target={'_blank'}>
				<img height={'25px'} src={mail} />
				<div>Почта Правительства НСО (owa.nso.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://mais2.nso.ru"} target={'_blank'}>
				{/*<img height={'25px'} src={mail} />*/}
				<div>ГИС «МАИС» (mais2.nso.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://gasu.gov.ru"} target={'_blank'}>
				<img height={'25px'} src={gasu} />
				<div>ГАСУ (gasu.gov.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://ris-gmp.nso.ru/"} target={'_blank'}>
				{/*<img height={'25px'} src={gasu} />*/}
				<div>ГИС "ГМП" (ris-gmp.nso.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://gosuslugi.ru/"} target={'_blank'}>
				<img height={'25px'} src={gosuslugi} />
				<div> ГосУслуги (gosuslugi.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://do.gosuslugi.ru/"} target={'_blank'}>
				{/*<img height={'25px'} src={gasu} />*/}
				<div> ГосУслуги - Досудебное Обжалование (do.gosuslugi.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://pos.gosuslugi.ru/"} target={'_blank'}>
				<img height={'25px'} src={pos} />
				<div> ГосУслуги - ПОС (pos.gosuslugi.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://zakupki.gov.ru/"} target={'_blank'}>
				<img height={'25px'} src={eis} />
				<div>ЕИС (zakupki.gov.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://zakupki.nso.ru/"} target={'_blank'}>
				{/*<img height={'25px'} src={gasu} />*/}
				<div>ГИСЗ (zakupki.nso.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://rts-tender.ru/"} target={'_blank'}>
				<img height={'25px'} src={rts} />
				<div>РТС-Тендер (zakupki.nso.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"https://dom.gosuslugi.ru/"} target={'_blank'}>
				<img height={'25px'} src={jkh} />
				<div>ГИС "ЖКХ" (dom.gosuslugi.ru)</div>
			</a>

			<a className={`${s0.btn} ${s0.img}`} href={"http://ssl.budgetplan.minfin.ru/"} target={'_blank'}>
				<img height={'25px'} src={eb} />
				<div>БП ГИИС ЭБ (ssl.budgetplan.minfin.ru)</div>
			</a>
			<a className={`${s0.btn} ${s0.img}`} href={"https://buh2012.budget.gov.ru/"} target={'_blank'}>
				<img height={'25px'} src={eb} />
				<div>ПВБУ ГИИС ЭБ (buh2012.budget.gov.ru) [ требуется "Континент TLS" ]</div>
			</a>


		</div>
	);
};

export default Sites;