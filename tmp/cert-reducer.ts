import {Iuser} from "../../types/data";

enum CertActionTypes {
    SET_CERTS = "SET_CERTS",
    SET_ADD_CERT = "SET_ADD_CERT",
    SET_DEL_CERT = "SET_DEL_CERT",
    SET_EDIT_CERT = "SET_EDIT_CERT",
}

/**********************************************************************************************************************/

// interface userStateTypes {
//     user: Iuser
//     isAuth: boolean
// }
interface certStateTypes {
    user: Iuser
    isAuth: boolean
}

interface IsetCerts {
    type: CertActionTypes.SET_CERTS
    payload: number
}

interface IsetAddCert {
    type: CertActionTypes.SET_ADD_CERT
    payload: Icert
}

interface IsetDelCert {
    type: CertActionTypes.SET_DEL_CERT
    payload: Icert
}
interface IsetEditCert {
    type: CertActionTypes.SET_EDIT_CERT
    payload: Icert
}

/**********************************************************************************************************************/

type authActionTypes = IsetCerts
    | IsetAddCert
    | IsetDelCert
    | IsetEditCert

/**********************************************************************************************************************/

export const IsetCerts = (userID: number) => ({
    type: CertActionTypes.SET_CERTS,
    payload: userID
} as const)
export const IsetAddUser = (userID: number) => ({
    type: CertActionTypes.SET_ADD_CERT,
    payload: userID
} as const)
export const IsetDelUser = () => ({
    type: CertActionTypes.SET_DEL_CERT,
} as const)
export const IsetEditCert = (userID: number) => ({
    type: CertActionTypes.SET_EDIT_CERT,
    payload: userID
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
    isAuth: false,
}

/**********************************************************************************************************************/

export default function userReducer(state: userStateTypes = initialState, action: authActionTypes): userStateTypes {
    // console.log("userReducer. action.payload=", action.payload)
    switch (action.type) {
        case CertActionTypes.SET_LOGIN:
            return {
                ...state,
                isAuth: true,
            }
        case CertActionTypes.SET_LOGOUT:
            return {
                ...state,
                isAuth: false,
            }
        case CertActionTypes.SET_LOGTOGGLE:
            console.log(CertActionTypes.SET_LOGTOGGLE)
            return {
                ...state,
                isAuth: !state.isAuth,
            }
        case CertActionTypes.SET_USER:
            console.log("AuthActionTypes.SET_USER=", CertActionTypes.SET_USER)
            return {
                ...state,
                user: action.payload
            }
        case CertActionTypes.EDIT_USER:
            console.log("AuthActionTypes.EDIT_USER=", CertActionTypes.EDIT_USER)
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


