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
  KEYS_ROUTE
} from "./const";
import Tel from "./pages/Tel/tel";
import TelAdm from "./pages/Tel/TelAdm/TelAdm";
import Keys from "./pages/Keys/Keys";


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
    Component: Main,
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
    path: DOCUMENTS_ROUTE,
    name: "Документы",
    // Component: DocumentsContainer,
    Component: Main,
    nav: true,
  },
  {
    path: TEL_ROUTE,
    name: "Телефонный справочник",
    // Component: DocumentsContainer,
    Component: Tel,
    nav: true,
  },
  {
    path: TEL_ROUTE_ADM,
    name: "Телефонный справочник Администрации",
    // Component: DocumentsContainer,
    Component: TelAdm,
  },
  {
    path: EMPLOYEES_ROUTE,
    name: "Специалисты",
    // Component: EmployeesContainer,
    Component: Main,
    nav: true,
  },
  {
    path: EMPLOYEES_ROUTE + `/:employeeID`,
    // Component: EmployeePageContainer,
    Component: Main,
  },
  {
    path: CONTACTS_ROUTE,
    name: "Контакты",
    // Component: Contacts,
    Component: Main,
    nav: true,
    hasDropdown: true
  },
  {
    path: CONTACTS_DOCUMENTS_ROUTE,
    name: "Документы",
    // Component: Documents,
    Component: Main,
      nav: true,
  },
  {
    path: CONTACTS_VACANCIES_ROUTE,
    name: "Вакансии",
    // Component: Vacancies,
    Component: Main,
      nav: true,
  },
]