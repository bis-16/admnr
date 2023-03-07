import Main from "./pages/Main/Main";
import {
  ADMIN_ROUTE,
  CONTACTS_ROUTE,
  EMPLOYEES_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
  DOCUMENTS_ROUTE,
  TEL_ROUTE,
  CERT_ROUTE,
  TEL_ROUTE_ADM,
  KEYS_ROUTE,
  NEWS_ROUTE,
  VACANCIES_ROUTE,
  VKS_ROUTE,
  TEL_ROUTE_SOVDEP,
  SITES_ROUTE,
  TEL_ROUTE_KSP,
  TEL_ROUTE_UO,
  TEL_ROUTE_SH, TEL_ROUTE_KULT, TEL_ROUTE_UK, TEL_ROUTE_CMU, AUTH_ROUTE, TEL_ROUTE_BMTO, TEL_ROUTE_UFIN, ERROR_ROUTE
} from "./const";
import Tel from "./pages/Tel/Tel";
import TelAdm from "./pages/Tel/TelAdm";
import Keys from "./pages/Keys/Keys";
import Cert from "./pages/Cert/Cert";
import Documents from "./pages/Documents/Documents";
import Employees from "./pages/Employees/Employees";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import Vacancies from "./pages/Vacancies/Vacancies";
import VKS from "./pages/VKS/VKS";
import TelSovDep from "./pages/Tel/TelSovDep";
import Sites from "./pages/Sites/Sites";
import TelKsp from "./pages/Tel/TelKsp";
import TelCmu from "./pages/Tel/TelCmu";
import TelUk from "./pages/Tel/TelUk";
import TelUo from "./pages/Tel/TelUo";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import TelSh from "./pages/Tel/TelSh";
import TelBmto from "./pages/Tel/TelBmto";
import {Iroute, ItelRoute} from "./types/data";
import TelUfin from "./pages/Tel/TelUfin";


export const authRoutes: Iroute[] = [
	{
		path: ADMIN_ROUTE,
		name: "Админка",
		Component: Admin,
	},
	{
		path: PROFILE_ROUTE,
		name: "Личный кабинет",
		Component: Main,
	},
	{
		path: CERT_ROUTE,
		name: "ЭЦП",
		Component: Cert,
		nav: true,
	},
	{
		path: KEYS_ROUTE,
		name: "Ключи",
		Component: Keys,
		nav: true,
	},
]

export const publicRoutes: Iroute[] = [
	{
		path: MAIN_ROUTE,
		name: "Главная",
		Component: Main,
		//nav: true,                  // флаг для для автовёрстки кнопки в меню навбара
	},
	{
		path: AUTH_ROUTE,
		name: "Авторизация",
		Component: Auth,
		//nav: true,
	},
	{
		path: NEWS_ROUTE,
		name: "Известия",
		Component: News,
		nav: true,
	},
	{
		path: SITES_ROUTE,
		name: "Сайты",
		Component: Sites,
		nav: true,
	},
	{
		path: DOCUMENTS_ROUTE,
		name: "Документы",
		Component: Documents,
		nav: true,
	},
	{
		path: TEL_ROUTE,
		name: "Абоненты",
		Component: Tel,
		nav: true,
	},
	{
		path: EMPLOYEES_ROUTE,
		name: "Сотрудники",
		Component: Employees,
		nav: false,
	},
	{
		path: EMPLOYEES_ROUTE + `/:employeeID`,
		name: '',
		Component: Employees,
	},
	{
		path: CONTACTS_ROUTE,
		name: "Контакты",
		Component: Contacts,
		nav: true,
	},
	{
		path: VACANCIES_ROUTE,
		name: "Вакансии",
		Component: Vacancies,
		nav: true,
	},
	{
		path: VKS_ROUTE,
		name: "ВКС",
		Component: VKS,
		nav: true,
	},
]

export const telRoutes: ItelRoute[] = [
	{
		path: TEL_ROUTE_ADM,
		name: 'Администрация Новосибирского района Новосибирской области',
		fullname: 'АДМИНИСТРАЦИЯ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ',
		Component: TelAdm,
		disable: true,
	},
	{
		path: TEL_ROUTE_SOVDEP,
		name: 'Совет депутатов Новосибирского района НСО',
		fullname: 'СОВЕТ ДЕПУТАТОВ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ',
		Component: TelSovDep,
	},
	{
		path: TEL_ROUTE_KSP,
		name: 'КСП НР',
		fullname: 'КОНТРОЛЬНО-СЧЕТНАЯ ПАЛАТА НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ',
		Component: TelKsp,
	},
	{
		path: TEL_ROUTE_UO,
		name: 'МКУ "Управление образования Новосибирского района"',
		fullname: 'МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ "УПРАВЛЕНИЕ ОБРАЗОВАНИЯ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ"',
		Component: TelUo,
		disable: true,
	},
	{
		path: TEL_ROUTE_SH,
		name: 'МКУ "УСХ"',
		fullname: 'МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ "УПРАВЛЕНИЕ СЕЛЬСКОГО ХОЗЯЙСТВА НОВОСИБИРСКОГО РАЙОНА"',
		Component: TelSh,
	},
	{
		path: TEL_ROUTE_KULT,
		name: 'МКУ "Управление культуры Новосибирского района"',
		fullname: 'МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ "УПРАВЛЕНИЕ КУЛЬТУРЫ НОВОСИБИРСКОГО РАЙОНА',
		Component: Tel,
		disable: true,
	},
	{
		path: TEL_ROUTE_UK,
		name: 'МКУ "УК ЕЗ ЖКХС"',
		fullname: 'МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ "УПРАВЛЯЮЩАЯ КОМПАНИЯ ЕДИНОГО ЗАКАЗЧИКА ЖИЛИЩНО-КОММУНАЛЬНОГО ХОЗЯЙСТВА И СТРОИТЕЛЬСТВА"',
		Component: TelUk,
	},
	{
		path: TEL_ROUTE_CMU,
		name: 'МКУ "ЦМУ"',
		fullname: 'МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ "ЦЕНТР МУНИЦИПАЛЬНЫХ УСЛУГ"',
		Component: TelCmu,
		disable: true,
	},
	{
		path: TEL_ROUTE_BMTO,
		name: 'МКУ "Центр БМТО"',
		fullname: 'МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ "ЦЕНТР БУХГАЛТЕРСКОГО, МАТЕРИАЛЬНО-ТЕХНИЧЕСКОГО ОБЕСПЕЧЕНИЯ"',
		Component: TelBmto,
		disable: true,
	},
	{
		path: TEL_ROUTE_BMTO,
		name: 'МКУ УФКИС НР НСО',
		fullname: 'МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ "УПРАВЛЕНИЕ ФИЗИЧЕСКОЙ КУЛЬТУРЫ И СПОРТА НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ"',
		Component: TelBmto,
		disable: true,
	},
	{
		path: TEL_ROUTE_UFIN,
		name: 'УФ и НП Новосибирского района Новосибирской области',
		fullname: 'УПРАВЛЕНИЕ ФИНАНСОВ И НАЛОГОВОЙ ПОЛИТИКИ НОВОСИБИРСКОГО РАЙОНА НОВОСИБИРСКОЙ ОБЛАСТИ',
		Component: TelUfin,
		disable: true,
	},
]


export const telRoutes_Ss: ItelRoute[] = [
	{
		path: ERROR_ROUTE,
		name: 'Администрация Барышевского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Березовского сельсовета ',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Боровского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Верх-Тулинского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Каменского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация р.п. Краснообск',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Криводановского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Кубовинского сельсовета ',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Кудряшовского сельсовета ',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Мичуринского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Морского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Мочищенского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Новолуговского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Плотниковского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Раздольненского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Станционного сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Толмачевского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
	{
		path: ERROR_ROUTE,
		name: 'Администрация Ярковского сельсовета',
		fullname: '',
		Component: TelUfin,
		disable: true,
	},
]