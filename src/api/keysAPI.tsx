import {$authHost, $host} from "./index";
import {Ikey} from "../types/data";

/* ****************************************************************************************************************** */

// export const createType = async (type: any) => {
// 	const response = await $authHost.post('api/type', type)
// 	return response.data
// }
//
// export const fetchTypes = async () => {
// 	const response = await $host.get('api/type')
// 	return response.data
// }

/* ****************************************************************************************************************** */

export const createSoftare = async (soft: any) => {
	const response = await $authHost.post('api/keys/soft', soft)
	return response.data
}

export const fetchSoftwares = async () => {
	// console.log("fetchSoftwares 1")
	const response = await $host.get('api/keys/soft')
	// console.log("fetchSoftwares 2 > response", response)
	return response.data
}

/* ****************************************************************************************************************** */

export const createKey = async (key: Ikey[]) => {
	const response = await $authHost.post('api/keys/key', key)
	return response.data
}

export const fetchKeys = async (softID = 0,  page, limit = 5) => {
	// console.group()
	// console.log("fetchDevices > typeID =", typeID)
	// console.log("fetchDevices > brandID =", brandID)
	// console.log("fetchDevices > page =", page)
	// console.log("fetchDevices > limit =", limit)
	// console.groupEnd()
	const response = await $host.get('api/keys/key', {
		params: {
			softId: softID,
			// page,
			// limit
		}
	})
	console.log("fetchDevices>response.data=",response.data)
	return response.data
}

export const fetchOneKey = async (keyID: number) => {
	const response = await $host.get('api/keys/key/' + keyID)
	return response.data
}

/* ****************************************************************************************************************** */