enum EmployeesActionTypes {
    SET_ALL_EMPLOYEES = "SET_ALL_EMPLOYEES",
    SET_LIST_EMPLOYEES = "SET_LIST_EMPLOYEES",
    SET_CURRENT_EMPLOYEES = "SET_CURRENT_EMPLOYEES",
    SET_MORE_EMPLOYEES = "SET_MORE_EMPLOYEES",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_EMPLOYEE = "SET_EMPLOYEE",
    SET_LOADING = "SET_LOADING",
}

/**********************************************************************************************************************/

export interface Iemployee {
    id: number;
    name: string;
    bigImg: string;
    img: string;
    text: string;   //профессия
    about: string;  //характеристика
}

interface IsetEmployees {
    type: EmployeesActionTypes.SET_ALL_EMPLOYEES | EmployeesActionTypes.SET_LIST_EMPLOYEES;
    payload: {
        doctors: Iemployee[];
        totalCount: number;
    }
}
interface IsetCurrentEmployees {
    type: EmployeesActionTypes.SET_CURRENT_EMPLOYEES;
    payload: {
        doctors: Iemployee[];
        totalCount: number;
    }
}
interface IsetMoreEmployees {
    type: EmployeesActionTypes.SET_MORE_EMPLOYEES;
    payload: {
        doctors: Iemployee[];
        totalCount: number;
    }
}
interface IsetCurrentPage {
    type: EmployeesActionTypes.SET_CURRENT_PAGE;
    payload: {
        currentPage: number;
    }
}
interface IsetEmployee {
    type: EmployeesActionTypes.SET_EMPLOYEE;
    payload: any;
}
interface IsetLoading {
    type: EmployeesActionTypes.SET_LOADING;
    payload: boolean;
}

interface employeesStateTypes {
    // count: number;
    employees: Iemployee[];
    loading: boolean;
    totalEmpsCount: number;
    pageSize: number;
    currentPage: number;
}

/**********************************************************************************************************************/

// type employeesActionTypes = ReturnType<typeof setEmployees> | ReturnType<typeof setEmployee>
type employeesActionTypes = IsetEmployees
    | IsetEmployee
    | IsetCurrentPage
    | IsetCurrentEmployees
    | IsetMoreEmployees
    | IsetLoading

/**********************************************************************************************************************/

const initialState: employeesStateTypes = {
    totalEmpsCount: 0,
    employees: [],
    loading: true,
    pageSize: 6,
    currentPage: 1,
}

/**********************************************************************************************************************/

export const setEmployees = (employees: employeesStateTypes) => ({
    type: EmployeesActionTypes.SET_ALL_EMPLOYEES,
    payload: employees
} as const)
export const setListEmployees = (employees: employeesStateTypes) => ({
    type: EmployeesActionTypes.SET_LIST_EMPLOYEES,
    payload: employees
} as const)
export const setCurrentEmployees = (employees: employeesStateTypes) => ({
    type: EmployeesActionTypes.SET_CURRENT_EMPLOYEES,
    payload: employees
} as const)
export const setMoreEmployees = (employees: employeesStateTypes) => ({
    type: EmployeesActionTypes.SET_MORE_EMPLOYEES,
    payload: employees
} as const)

export const setEmployee = (employee: Iemployee) => ({
    type: EmployeesActionTypes.SET_EMPLOYEE,
    payload: employee
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: EmployeesActionTypes.SET_CURRENT_PAGE,
    payload: {
        currentPage: currentPage
    },
} as const)
export const setLoading = (boolean: boolean) => ({
    type: EmployeesActionTypes.SET_LOADING,
    payload: boolean,
} as const)

/**********************************************************************************************************************/

export default function employeesReducer(state: employeesStateTypes = initialState, action: employeesActionTypes): employeesStateTypes {
    let emps: Iemployee[] = []
    switch (action.type) {
        case EmployeesActionTypes.SET_ALL_EMPLOYEES:
            console.log("action.payload.TotalCount=", action.payload.totalCount)
            return {
                ...state,
                loading: false,
                employees: action.payload.doctors,
                totalEmpsCount: action.payload.totalCount,
            }
        case EmployeesActionTypes.SET_LIST_EMPLOYEES:
            console.log("action.payload.TotalCount=", action.payload.totalCount)
            return {
                ...state,
                loading: false,
                employees: action.payload.doctors,
                totalEmpsCount: action.payload.totalCount,
            }
        case EmployeesActionTypes.SET_CURRENT_EMPLOYEES:
            // console.log("action.payload.doctors=", action.payload.doctors)
            action.payload.doctors.map((doctor, index) => {
                if (index >= (state.currentPage - 1) * state.pageSize && index <= (state.currentPage - 1) * state.pageSize + state.pageSize - 1) {
                    emps.push(doctor)
                }

            })
            console.log("doctorsPageArr=", emps)
            return {
                ...state,
                loading: false,
                employees: emps,
                totalEmpsCount: action.payload.totalCount,
            }

        case EmployeesActionTypes.SET_MORE_EMPLOYEES:
            console.log("set_more_employees");
            action.payload.doctors.map((doctor, index) => {
                if (index >= (state.currentPage - 1) * state.pageSize && index <= (state.currentPage - 1) * state.pageSize + state.pageSize - 1) {
                    emps.push(doctor)
                }
            })
            return {
                ...state,
                loading: false,
                employees: [...state.employees, ...emps],
                // currentPage: action.payload.
                // totalEmpsCount: action.payload.totalCount,
            }

        case EmployeesActionTypes.SET_CURRENT_PAGE:
            console.log("action.payload=", action.payload);
            console.log("action.payload.currentPage=", action.payload.currentPage);
            return {
                ...state,
                currentPage: action.payload.currentPage
            }

        case EmployeesActionTypes.SET_EMPLOYEE:                   //not used, not worked
            return {
                ...state,

                loading: false,
                employees: action.payload.doctors,
                // totalCount: action.payload.totalCount,
            }

        case EmployeesActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }

        default:
            return state
    }

}