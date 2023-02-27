enum TelActionTypes {
    SET_TEL = "SET_TEL",
    SET_ADD_TEL = "SET_ADD_TEL",
    SET_DEL_TEL = "SET_DEL_TEL",
}

// /**********************************************************************************************************************/
//
// // interface telStateTypes {
// //     user: Iuser
// // }
//
// interface IsetTel {
//     type: TelActionTypes.SET_TEL,
// }
// interface IsetAddTel {
//     type: TelActionTypes.SET_ADD_TEL,
//     payload: number,
// }
// interface IsetDelTel {
//     type: TelActionTypes.SET_DEL_TEL,
//     payload: number,
// }
//
//
// /**********************************************************************************************************************/
//
// type authActionTypes = IsetTel | IsetAddTel | IsetDelTel
//
// /**********************************************************************************************************************/
//
// export const setTel = (userID: number) => ({
//     type: AuthActionTypes.SET_LOGIN,
//     payload: userID
// } as const)
// export const setAddTel = (userID: number) => ({
//     type: AuthActionTypes.SET_LOGOUT,
//     payload: userID
// } as const)
// export const setDelTel = () => ({
//     type: AuthActionTypes.SET_LOGTOGGLE
// } as const)
//
// /**********************************************************************************************************************/
//
// const initialState: telStateTypes = {
//     user: {
//         userID: 1,
//         userFName: "Василий",
//         userMName: "Иванович",
//         userSName: "Пупкин",
//         email: "test@mail.ru",
//         tel: "+7-913-123-45-67",
//         tel2: "+7-913-123-45-67",
//         birthday: '1982-02-25',
//         sex: "m",
//         admin: true,
//     },
//     isAuth: false,
// }
//
// /**********************************************************************************************************************/
//
// export default function userReducer(state: userStateTypes = initialState, action: authActionTypes): userStateTypes {
//     // console.log("userReducer. action.payload=", action.payload)
//     switch (action.type) {
//         case AuthActionTypes.SET_LOGIN:
//             return {
//                 ...state,
//                 isAuth: true,
//             }
//         case AuthActionTypes.SET_LOGOUT:
//             return {
//                 ...state,
//                 isAuth: false,
//             }
//         case AuthActionTypes.SET_LOGTOGGLE:
//             console.log(AuthActionTypes.SET_LOGTOGGLE)
//             return {
//                 ...state,
//                 isAuth: !state.isAuth,
//             }
//         case AuthActionTypes.SET_USER:
//             console.log("AuthActionTypes.SET_USER=", AuthActionTypes.SET_USER)
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         case AuthActionTypes.EDIT_USER:
//             console.log("AuthActionTypes.EDIT_USER=", AuthActionTypes.EDIT_USER)
//             // console.log("userReducer. action.payload=", action.payload)
//             // console.log("userReducer. action.payload.user=", action.payload.user)
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         default:
//             return state
//     }
// }
//
//
