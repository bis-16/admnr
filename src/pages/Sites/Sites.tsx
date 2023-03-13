import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import s0 from '../../App.module.scss'
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
import arrowUp from "../../assets/img/arrow_white_up.png";
import arrowDown from "../../assets/img/arrow_white_down.png";

const sitesList = [
	{
		name: `Администрация Новосибирского района (nsr.nso.ru)`,
		site: "http://nsr.nso.ru",
		imgSrc: `${admnr}`,
	},
	{
		name: `Совет депутатов Новосибирского района (nrdeputat.nso.ru)`,
		site: "http://nrdeputat.nso.ru",
	},
	{
		name: `Контрольно-счётная палата Новосибирского района (kspnr.nso.ru)`,
		site: "http://kspnr.nso.ru",
	},
	{
		name: `СЭДД Правительства НСО - внутренний контур (cm.nso.ru)`,
		site: "http://cm.nso.ru:8080/cmj-web/",
		imgSrc: cm,
	},
	{
		name: `СЭДД Правительства НСО - внешний контур (sedd-cm.nso.ru)`,
		site: "http://sedd-cm.nso.ru:8080/cmj-web/",
		imgSrc: cm,
	},
	{
		name: `Почта Правительства НСО (owa.nso.ru)`,
		site: "https://owa.nso.ru/owa",
		imgSrc: mail,
	},
	{
		name: `ГИС «МАИС» (mais2.nso.ru)`,
		site: "https://mais2.nso.ru",
	},
	{
		name: `ГАСУ (gasu.gov.ru)`,
		site: "https://gasu.gov.ru",
		imgSrc: gasu,
	},
	{
		name: `ГИС "ГМП" (ris-gmp.nso.ru)`,
		site: "https://ris-gmp.nso.ru/",
	},
	{
		name: `ГосУслуги (gosuslugi.ru)`,
		site: "https://gosuslugi.ru/",
		imgSrc: gosuslugi,
	},
	{
		name: `ГосУслуги - Досудебное Обжалование (do.gosuslugi.ru)`,
		site: "https://do.gosuslugi.ru/",
	},
	{
		name: `ГосУслуги - ПОС (pos.gosuslugi.ru)`,
		site: "https://pos.gosuslugi.ru/",
		imgSrc: pos,
	},
	{
		name: `ЕИС (zakupki.gov.ru)`,
		site: "https://zakupki.gov.ru/",
		imgSrc: eis,
	},
	{
		name: `ГИСЗ (zakupki.nso.ru)`,
		site: "https://zakupki.nso.ru/",
	},
	{
		name: `РТС-Тендер (zakupki.nso.ru)`,
		site: "https://rts-tender.ru/",
		imgSrc: rts,
	},
	{
		name: `ГИС "ЖКХ" (dom.gosuslugi.ru)`,
		site: "https://dom.gosuslugi.ru/",
		imgSrc: jkh,
	},
	{
		name: `БП ГИИС ЭБ (ssl.budgetplan.minfin.ru)`,
		site: "http://ssl.budgetplan.minfin.ru/",
		imgSrc: eb,
	},
	{
		name: `ПВБУ ГИИС ЭБ (buh2012.budget.gov.ru) [ требуется "Континент TLS" ]`,
		site: "https://buh2012.budget.gov.ru/",
		imgSrc: eb,
	},
]
const mkuList = [
	{
		name: `МКУ "Управление образования Новосибирского района" (edunor.nso.ru)`,
		site: "http://edunor.nso.ru",
	},
	{
		name: `МКУ "Управление культуры Новосибирского района" (kulturanr.ru)`,
		site: "https://kulturanr.ru/",
	},
	{
		name: `МКУ "Центр муниципальных услуг" (mku-zb.ru)`,
		site: "http://mku-zb.ru/",
	},
	{
		name: `МКУ "Центр БМТО" (centrbmto.ru)`,
		site: "http://centrbmto.ru/",
	},
	{
		name: `Информационно-аналитическое издание "Новосибирский район - Территория Развития" (нртр.рф)`,
		site: "http://нртр.рф",
	},
]
const ssList = [
	{
		name: "Барышевский сельсовет",
		site: "https://baryshevo.nso.ru"
	},
	{
		name: "Березовский сельсовет",
		site: "https://admber.nso.ru",
	},
	{
		name: "Боровской сельсовет",
		site: "https://admborovoe.nso.ru",
	},
	{
		name: "Верх-Тулинский сельсовет",
		site: "https://adm-verh-tula.nso.ru",
	},
	{
		name: "Каменский сельсовет",
		site: "https://admkamenka.nso.ru",
	},
	{
		name: "р.п. Краснообск",
		site: "https://krasnoobsk.nso.ru",
	},
	{
		name: "Криводановский сельсовет",
		site: "https://krivodanovka.nso.ru",
	},
	{
		name: "Кубовинский сельсовет",
		site: "https://kubovinski.nso.ru",
	},
	{
		name: "Кудряшовский сельсовет",
		site: "https://admkudrjashi.nso.ru",
	},
	{
		name: "Мичуринский сельсовет",
		site: "https://michurinsk.nso.ru",
	},
	{
		name: "Морской сельсовет",
		site: "https://morskoynsk.nso.ru",
	},
	{
		name: "Мочищенский сельсовет",
		site: "https://mochishe.nso.ru",
	},
	{
		name: "Новолуговской сельсовет",
		site: "https://novolugovoe.nso.ru",
	},
	{
		name: "Плотниковский сельсовет",
		site: "https://plotnikovskij.nso.ru",
	},
	{
		name: "Раздольненский сельсовет",
		site: "https://razdolsovet.nso.ru",
	},
	{
		name: "Станционный сельсовет",
		site: "https://admstan.nso.ru",
	},
	{
		name: "Толмачевский сельсовет",
		site: "https://tolmachevskiy.nso.ru",
	},
	{
		name: "Ярковский сельсовет",
		site: "https://admjarkovo.nso.ru",
	},
]

interface DropdownCreatorProps {
	something: React.SetStateAction<boolean>,
	setSomething: Dispatch<SetStateAction<boolean>>,
	name: string,
	list: {
		name: string,
		site: string,
		img?: string
	}[],
}

const DropdownCreator: FC<DropdownCreatorProps> = ({something, setSomething, name, list}) => {
	return (
		<div>

			<div className={`${s0.btn}`}
					 onClick={() => {
						 setSomething(!something)
					 }}>
				{name}
				<img src={something ? arrowUp : arrowDown} className={s0.btn__arrow}/>
			</div>

			{list.map((item) => (
				<a className={`${s0.btn}  ${something ? '' : s0.visuallyHidden}`} href={`${item.site}`} target={'_blank'}>
					{item.name}
				</a>
			))}
		</div>
	)
}

const Sites = () => {

	const navigate = useNavigate()
	const [isSsOpen, setSsOpen] = useState<boolean>(false)
	const [isMkuOpen, setMkuOpen] = useState<boolean>(false)

	return (
		<div className={s0.wrapper__sites}>


			{sitesList.map((item, index) => (
				<a className={`${s0.btn} ${s0.img}`} href={item.site} target={'_blank'}>
					{item.imgSrc && <img height={'25px'} src={item.imgSrc}/>}
					{item.name}
				</a>
			))}


			<DropdownCreator name={"Подведомственные учреждения"}
											 list={mkuList}
											 something={isMkuOpen}
											 setSomething={setMkuOpen}
			/>
			<DropdownCreator name={"Администрации муниципальных образований Новосибирского района НСО"}
											 list={ssList}
											 something={isSsOpen}
											 setSomething={setSsOpen}
			/>

		</div>
	);
};

export default Sites;