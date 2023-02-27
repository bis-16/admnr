import {Iuser, Ikey} from "../../types/data";

enum KeyActionTypes {
    SET_KEYS = "SET_KEYS",
    SET_ADD_KEY = "SET_ADD_KEY",
    SET_DEL_KEY = "SET_DEL_KEY",
    SET_EDIT_KEY = "SET_EDIT_KEY",
}

/**********************************************************************************************************************/

// interface userStateTypes {
//     user: Iuser
//     isAuth: boolean
// }

interface keyStateTypes {
    key: Ikey
}

interface IsetKeys {
    type: KeyActionTypes.SET_KEYS
    payload: number
}

interface IsetAddKey {
    type: KeyActionTypes.SET_ADD_KEY
    payload: Ikey
}

interface IsetDelKey {
    type: KeyActionTypes.SET_DEL_KEY
    payload: Ikey
}
interface IsetEditKey {
    type: KeyActionTypes.SET_EDIT_KEY
    payload: Ikey
}

/**********************************************************************************************************************/

type keyActionTypes = IsetKeys
    | IsetAddKey
    | IsetDelKey
    | IsetEditKey

/**********************************************************************************************************************/

export const IsetKeys = (keyID: number) => ({
    type: KeyActionTypes.SET_KEYS,
    payload: keyID
} as const)
export const IsetAddKey = (keyID: number) => ({
    type: KeyActionTypes.SET_ADD_KEY,
    payload: keyID
} as const)
export const IsetDelKey = (keyID: number) => ({
    type: KeyActionTypes.SET_DEL_KEY,
    payload: keyID
} as const)
export const IsetEditKey = (keyID: number) => ({
    type: KeyActionTypes.SET_EDIT_KEY,
    payload: keyID
} as const)

/**********************************************************************************************************************/

const initialState: keyStateTypes = {
    key: {
        keyID: 1,
        program: {
            programID: 1,
            name: "Крипто про",
            version: "4.0"
        },
        key: "xxx-xxx-xxx-xxx-xxx",
        userFName: "Василий",
        userMName: "Иванович",
        userSName: "Пупкин",
        sb: 13,
        inventory: "ВА9231",
        setupDate: '13.02.2022',
        expDate: '13.02.2025',
    },
}

/**********************************************************************************************************************/

export default function keysReducer(state: keyStateTypes = initialState, action: keyActionTypes): keyStateTypes {
    // console.log("userReducer. action.payload=", action.payload)
    switch (action.type) {
        case KeyActionTypes.SET_KEYS:
            return {
                ...state,
            }
        case KeyActionTypes.SET_ADD_KEY:
            return {
                ...state,
            }
        case KeyActionTypes.SET_DEL_KEY:
            console.log(KeyActionTypes.SET_DEL_KEY)
            return {
                ...state,
             }
        case KeyActionTypes.SET_EDIT_KEY:
            console.log("KeyActionTypes.EDIT_USER=", KeyActionTypes.SET_EDIT_KEY)
            // console.log("userReducer. action.payload=", action.payload)
            // console.log("userReducer. action.payload.user=", action.payload.user)
            return {
                ...state,
                // user: action.payload
            }
        default:
            return state
    }
}


