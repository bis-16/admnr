// class UserReducer{
//     constructor() {
//         this._isAuth = false
//         this._user = {}
//
//     }
//
//     setIsAuth(bool) {
//         this._isAuth = bool
//     }
//     setUser(user) {
//         this._user = user
//     }
//
//     get isAuth() {
//         return this._isAuth
//     }
//     get user() {
//         return this._user
//     }
//
// }
import {Iuser} from "../../types/data";

enum AuthActionTypes {
    SET_LOGIN = "SET_LOGIN",
    SET_LOGOUT = "SET_LOGOUT",
    SET_LOGTOGGLE = "SET_LOGTOGGLE",
    SET_USER = "SET_USER",
    EDIT_USER = "EDIT_USER",
}

/**********************************************************************************************************************/

interface userStateTypes {
    user: Iuser
    isAuth: boolean
}

interface IsetLogin {
    type: AuthActionTypes.SET_LOGIN
    payload: number
}

interface IsetLogout {
    type: AuthActionTypes.SET_LOGOUT
    payload: number
}

interface ItoggleUser {
    type: AuthActionTypes.SET_LOGTOGGLE
}

interface IeditUser {
    type: AuthActionTypes.EDIT_USER
    payload: Iuser
}

interface IsetUser {
    type: AuthActionTypes.SET_USER
    payload: Iuser
}

/**********************************************************************************************************************/

type authActionTypes = IsetLogin
    | IsetLogout
    | ItoggleUser
    | IeditUser
    | IsetUser

/**********************************************************************************************************************/

export const setLogin = (userID: number) => ({
    type: AuthActionTypes.SET_LOGIN,
    payload: userID
} as const)
export const setLogout = (userID: number) => ({
    type: AuthActionTypes.SET_LOGOUT,
    payload: userID
} as const)
export const setLogtoggle = () => ({
    type: AuthActionTypes.SET_LOGTOGGLE
} as const)
export const setUser = (userID: number) => ({
    type: AuthActionTypes.SET_USER,
    payload: userID
} as const)
export const setEditUser = (editableUser: Iuser) => ({
    type: AuthActionTypes.EDIT_USER,
    payload: editableUser
} as const)

/**********************************************************************************************************************/

const initialState: userStateTypes = {
    user: {
        userID: 1,
        userFName: "Василий",
        userMName: "Иванович",
        userSName: "Пупкин",
        email: "test@mail.ru",
        tel: "+7-913-123-45-67",
        birthday: '1982-02-25',
        sex: "m",
        admin: true,
    },
    isAuth: true,
}

/**********************************************************************************************************************/

export default function userReducer(state: userStateTypes = initialState, action: authActionTypes): userStateTypes {
    // console.log("userReducer. action.payload=", action.payload)
    switch (action.type) {
        case AuthActionTypes.SET_LOGIN:
            return {
                ...state,
                isAuth: true,
            }
        case AuthActionTypes.SET_LOGOUT:
            return {
                ...state,
                isAuth: false,
            }
        case AuthActionTypes.SET_LOGTOGGLE:
            console.log(AuthActionTypes.SET_LOGTOGGLE)
            return {
                ...state,
                isAuth: !state.isAuth,
            }
        case AuthActionTypes.SET_USER:
            console.log("AuthActionTypes.SET_USER=", AuthActionTypes.SET_USER)
            return {
                ...state,
                user: action.payload
            }
        case AuthActionTypes.EDIT_USER:
            console.log("AuthActionTypes.EDIT_USER=", AuthActionTypes.EDIT_USER)
            // console.log("userReducer. action.payload=", action.payload)
            // console.log("userReducer. action.payload.user=", action.payload.user)
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}


