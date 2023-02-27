import Main from "./pages/Main/Main";
import {
  ADMIN_ROUTE,
  CONTACTS_ROUTE,
  EMPLOYEES_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
  CONTACTS_DOCUMENTS_ROUTE,
  CONTACTS_VACANCIES_ROUTE,
  DOCUMENTS_ROUTE,
  TEL_ROUTE,
  CERT_ROUTE,
  TEL_ROUTE_ADM,
  KEYS_ROUTE, NEWS_ROUTE, VACANCIES_ROUTE, VKS_ROUTE, TEL_ROUTE_SOVDEP
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


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    name: "Админка",
    // Component: Admin,
    Component: Main,
  },
  {
    path: PROFILE_ROUTE,
    name: "Личный кабинет",
    // Component: Profile,
    Component: Main,
  },
  {
    path: CERT_ROUTE,
    name: "ЭЦП",
    // Component: DocumentsContainer,
    Component: Cert,
    nav: true,
  },
  {
    path: KEYS_ROUTE,
    name: "Ключи",
    // Component: DocumentsContainer,
    Component: Keys,
    nav: true,
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    name: "Главная",
    Component: Main,
    nav: true,                  // флаг для для автовёрстки кнопки в меню навбара
  },
  {
    path: NEWS_ROUTE,
    name: "Известия",
    Component: News,
    nav: true,
  },
  {
    path: DOCUMENTS_ROUTE,
    name: "Документы",
    // Component: DocumentsContainer,
    Component: Documents,
    nav: true,
  },
  {
    path: TEL_ROUTE,
    name: "Телефонный справочник",
    Component: Tel,
    nav: true,
  },
  {
    path: TEL_ROUTE_ADM,
    name: "Телефонный справочник Администрации",
    Component: TelAdm,
  },
  {
    path: TEL_ROUTE_SOVDEP,
    name: "Телефонный справочник Совета Депутатов Новосибирского района",
    Component: TelSovDep,
  },
  {
    path: EMPLOYEES_ROUTE,
    name: "Сотрудники",
    // Component: EmployeesContainer,
    Component: Employees,
    nav: true,
  },
  {
    path: EMPLOYEES_ROUTE + `/:employeeID`,
    Component: Employees,
  },
  {
    path: CONTACTS_ROUTE,
    name: "Контакты",
    // Component: Contacts,
    Component: Contacts,
    nav: true,
    // hasDropdown: true
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
