import {$authHost, $host} from "./index";
import {Iemp} from "../types/data";

export const createDepartment = async (departament: any) => {
	const response = await $authHost.post('api/tels/department', departament)
	return response.data
}
export const deleteDepartment = async (departamentId: number) => {
	const response = await $authHost.delete('api/tels/department/' + departamentId)
	return response.data
}

export const fetchDepartments = async () => {
	const response = await $host.get('api/tels/department')
	return response.data
}
export const fetchOneDepartment = async (departamentId: number) => {
	const response = await $host.get('api/tels/department/' + departamentId)
	return response.data
}

/* ****************************************************************************************************************** */

export const createEmp = async (emp: Iemp[]) => {
	const response = await $authHost.post('api/tels/emp', emp)
	return response.data
}

export const fetchEmps = async (departamentID = 0,  page: number, limit = 5) => {
	const response = await $host.get('api/tels/emp', {
		params: {
			departamentId: departamentID,
			// page,
			// limit
		}
	})
	// console.log("fetchDevices>response.data=",response.data)
	return response.data
}

export const fetchOneEmp = async (empID: number) => {
	const response = await $host.get('api/tels/emp/' + empID)
	return response.data
}

/* ****************************************************************************************************************** */