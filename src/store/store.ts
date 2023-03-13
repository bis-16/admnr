import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./reducers/user-reducer";
import keysReducer from "./reducers/keys-reducer";
import employeesReducer from "./reducers/employees-reducer";

const rootReducer = combineReducers({
  // employeesPage: employeesReducer,
  // pricesPage: pricesReducer,
  // errorMessagePage: errorReducer,
  profilePage: userReducer,
  keysPage: keysReducer,
  telsPage: employeesReducer,
})


// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export default store


export type RootState = ReturnType<typeof store.getState>
            // ReturnType означает «Тип возвращаемого значения функции».
            // typeof означает «Скажите мне, какие типы у этой штуки».
            // store.getState - это функция, которая возвращает объект состояния, который в данный момент находится в сторе.
            // Что бы ни возвращалось из store.getState, я хочу, чтобы типы сохранялись как переменная RootState!
export type AppDispatch = typeof store.dispatch
            // typeof означает «Скажите мне, какие типы у этой штуки».
            // store.dispatch означает «Я хочу, чтобы объект отправки использовался для отправки действий в стор».
            // Теперь соедините эти части !: Получите объект отправки из стора, разбейте его на типы и сохраните в переменной AppDispatch!

            //Теперь, когда у нас есть предполагаемые типы из нашего store и dispatch, мы можем применить их к нашим хукам.
            // Мы сделаем это, создав собственный крючок, чтобы нам не приходилось набирать наши хуки каждый раз, когда мы собираемся их использовать: