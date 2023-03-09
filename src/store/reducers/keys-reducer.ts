import {Ikey, Isoftware} from "../../types/data";

enum KeyActionTypes {
	SET_KEY = "SET_KEY",
	SET_KEYS = "SET_KEYS",
	SET_ADD_KEY = "SET_ADD_KEY",
	SET_DEL_KEY = "SET_DEL_KEY",
	SET_ACTIVE_KEY = "SET_ACTIVE_KEY",
	SET_EDIT_KEY = "SET_EDIT_KEY",

	SET_SOFT = "SET_SOFT",
	SET_ADD_SOFT = "SET_ADD_SOFT",
	SET_DEL_SOFT = "SET_DEL_SOFT",
	SET_EDIT_SOFT = "SET_EDIT_SOFT",
	SET_ACTIVE_SOFT = "SET_ACTIVE_SOFT",

	SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
	SET_PAGE = "SET_PAGE",

}

/**********************************************************************************************************************/

// interface userStateTypes {
//     user: Iuser
//     isAuth: boolean
// }

interface keysStateTypes {
	softwares: Isoftware[],
	keys: Ikey[],
	activeKey: Ikey | null,
	activeSoftId: number,
	pagination: {
		currentPage: number,
		totalCount: number,
		limit: number
	}
}

interface IsetKey {
	type: KeyActionTypes.SET_KEY
	payload: number
}

interface IsetKeys {
	type: KeyActionTypes.SET_KEYS
	payload: Ikey[]
}

interface IsetAddKey {
	type: KeyActionTypes.SET_ADD_KEY
	payload: Ikey
}

interface IsetDelKey {
	type: KeyActionTypes.SET_DEL_KEY
	payload: Ikey
}

interface IsetActiveKey {
	type: KeyActionTypes.SET_ACTIVE_KEY
	payload: Ikey
}

interface IsetEditKey {
	type: KeyActionTypes.SET_EDIT_KEY
	payload: Ikey
}

interface IsetSoft {
	type: KeyActionTypes.SET_SOFT
	payload: Isoftware[]
}

interface IsetAddSoft {
	type: KeyActionTypes.SET_ADD_SOFT
	payload: Isoftware
}

interface IsetDelSoft {
	type: KeyActionTypes.SET_DEL_SOFT
	payload: Isoftware
}

interface IsetActiveSoft {
	type: KeyActionTypes.SET_ACTIVE_SOFT
	payload: number
}

interface IsetTotalCount {
	type: KeyActionTypes.SET_TOTAL_COUNT
	payload: number
}
interface IsetPage {
	type: KeyActionTypes.SET_PAGE
	payload: number
}

/**********************************************************************************************************************/

type keyActionTypes = IsetKeys
	| IsetAddKey
	| IsetDelKey
	| IsetActiveKey
	| IsetEditKey
	| IsetSoft
	| IsetAddSoft
	| IsetDelSoft
	| IsetActiveSoft
	| IsetTotalCount
	| IsetPage

/**********************************************************************************************************************/

export const setKey = (keyID: number) => ({
	type: KeyActionTypes.SET_KEYS,
	payload: keyID
} as const)
export const setKeys = (keys: Ikey[]) => ({
	type: KeyActionTypes.SET_KEYS,
	payload: keys
} as const)
export const setAddKey = (keyID: number) => ({
	type: KeyActionTypes.SET_ADD_KEY,
	payload: keyID
} as const)
export const setDelKey = (key: Ikey) => ({
	type: KeyActionTypes.SET_DEL_KEY,
	payload: key
} as const)
export const setActiveKey = (key: Ikey) => ({
	type: KeyActionTypes.SET_ACTIVE_KEY,
	payload: key
} as const)
export const setEditKey = (keyID: number) => ({
	type: KeyActionTypes.SET_EDIT_KEY,
	payload: keyID
} as const)

export const setSoft = (softwares: Isoftware[]) => ({
	type: KeyActionTypes.SET_SOFT,
	payload: softwares
} as const)
export const setAddSoft = (softwares: Isoftware[]) => ({
	type: KeyActionTypes.SET_ADD_SOFT,
	payload: softwares
} as const)
export const setDelSoft = (softwares: Isoftware[]) => ({
	type: KeyActionTypes.SET_DEL_SOFT,
	payload: softwares
} as const)

export const setActiveSoftware = (softID: number) => ({
	type: KeyActionTypes.SET_ACTIVE_SOFT,
	payload: softID
} as const)

/**********************************************************************************************************************/

const initialState: keysStateTypes = {
	// @ts-ignore
	softwares: [
		{
			id: 101,
			name: "Крипто Про",
			// version: "4.0"
		},
		{
			id: 102,
			name: "Крипто Арм",
			// version: ''
		},
	],
	keys: [
		{
			id: 0,
			software: {
				id: 101,
				name: "Крипто Про",
			},
			version: "4.0",
			key: "xxx-xxx-xxx-xxx-xxx",
			fName: "Василий",
			mName: "Иванович",
			lName: "Пупкин",
			sb: 13,
			inv: "ВА9231",
			inDate: '13.02.2022',
			outDate: '-',
		},
		{
			id: 1,
			software: {
				id: 101,
				name: "Крипто Про",
			},
			version: "4.0",
			key: "xxx-xxx-xxx-xxx-xxx",
			fName: "Татьяна",
			mName: "Петровна",
			lName: "Иванова",
			sb: 13,
			inv: "ВА9231",
			inDate: '13.02.2023',
			outDate: '-',
		},
	],
	activeKey: null,
	activeSoftId: 0,
	pagination: {
		currentPage: 1,
		totalCount: 1,
		limit: 3
	}
}

/**********************************************************************************************************************/

export default function keysReducer(state: keysStateTypes = initialState, action: keyActionTypes): keysStateTypes {
	// console.log("userReducer. action.payload=", action.payload)
	switch (action.type) {
		case KeyActionTypes.SET_KEYS:
			console.log('KeyActionTypes.SET_KEYS=', KeyActionTypes.SET_KEYS)
			console.log('KeyActionTypes.SET_KEYS.action.payload=', action.payload)
			return {
				...state,
				keys: [...action.payload],
			}
		case KeyActionTypes.SET_ADD_KEY:
			console.log('KeyActionTypes.SET_ADD_KEY=', KeyActionTypes.SET_ADD_KEY)
			return {
				...state,
			}
		case KeyActionTypes.SET_DEL_KEY:
			console.log('KeyActionTypes.SET_DEL_KEY=', KeyActionTypes.SET_DEL_KEY)
			return {
				...state,
			}
		case KeyActionTypes.SET_ACTIVE_KEY:
			console.log('KeyActionTypes.SET_ACTIVE_KEY=', KeyActionTypes.SET_ACTIVE_KEY)
			return {
				...state,
				activeKey: action.payload,
			}
		case KeyActionTypes.SET_EDIT_KEY:
			console.log("KeyActionTypes.SET_EDIT_KEY=", KeyActionTypes.SET_EDIT_KEY)
		// console.log("userReducer. action.payload=", action.payload)
		// console.log("userReducer. action.payload.user=", action.payload.user)

		case KeyActionTypes.SET_SOFT:
			console.log('KeyActionTypes.SET_KEYS=', KeyActionTypes.SET_KEYS)
			return {
				...state,
				// @ts-ignore
				softwares: [...action.payload]
			}
		case KeyActionTypes.SET_ADD_SOFT:
			console.log('KeyActionTypes.SET_ADD_SOFT=', KeyActionTypes.SET_ADD_SOFT)
			return {
				...state,
			}
		case KeyActionTypes.SET_DEL_SOFT:
			console.log('KeyActionTypes.SET_DEL_SOFT=', KeyActionTypes.SET_DEL_SOFT)
			return {
				...state,
			}

		case KeyActionTypes.SET_ACTIVE_SOFT:
			console.log('KeyActionTypes.SET_ACTIVE_SOFT=', KeyActionTypes.SET_ACTIVE_SOFT)
			return {
				...state,
				activeSoftId: action.payload
			}

		case KeyActionTypes.SET_TOTAL_COUNT:
			return {
				...state,
				pagination: {
					...state.pagination,
					totalCount: action.payload,
				}
			}


			return {
				...state,
				// user: action.payload
			}
		default:
			return state
	}
}


