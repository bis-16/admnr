import React, {useState} from 'react';
import s0 from "../../App.module.scss"
import s from "./Auth.module.scss"
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "../../const";
import {login, registration} from "../../api/userAPI";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../store/store";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setLogin} from "../../store/reducers/user-reducer";

const Auth = () => {

	const dispatch = useAppDispatch()

	const location = useLocation()
	let navigate = useNavigate()
	const isLogin: boolean = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {user, isAuth} = useAppSelector((state: RootState) => state.profilePage)

	const click = async () => {
		console.log('click1')
		console.log('isLogin1', isLogin)
		console.log("user=", user)
		console.log("isAuth=", isAuth)
		try {
			if (isLogin) {
				const response = await login(email, password) //response = user
				console.log('response(isLogin)=', response)
			} else {
				const response = await registration(email, password)
				console.log('response(!isLogin)=', response)
			}

			dispatch(setLogin(user.userID))
			navigate(PROFILE_ROUTE)
		} catch (e) {
			console.group("e")
			console.error(e)
			// console.error(e.response)
			// console.error(e.response.data)
			// console.error(e.response.data.message)
			console.groupEnd()
			//
		}
	}

	return (
		<div className={s.wrapper__auth}>
			<Card className={s.card}>
				<h2 className={"m-auto"}>
					{isLogin ? 'Авторизация' : 'Регистрация'}
				</h2>
				<Form className={"d-flex flex-column"}>
					<Form.Control className={"mt-3"}
												placeholder={"введите e-mail"}
												value={email}
												onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control className={"mt-3"}
												type={"password"}
												placeholder={"введите пароль"}
												value={password}
												onChange={e => {
													setPassword(e.target.value)
													console.log("e=", e)
													console.log("e.target=", e.target)
													console.log("e.target.value=", e.target.value)
												}}
					/>
					<Row className={"d-flex justify-content-between mt-3 pl-3 pr-3"}>
						{/*{isLogin ?*/}
						{/*	<div>Нет аккаунта?*/}
						{/*		<NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь</NavLink>*/}
						{/*	</div>*/}
						{/*	: <div>Уже зарегистрированы?*/}
						{/*		<NavLink to={LOGIN_ROUTE}> Авторизуйтесь</NavLink>*/}
						{/*	</div>*/}

						{/*}*/}

						<Button
							variant={"outline-danger"}
							className={`${''}`}
							onClick={click}
						>
							{isLogin ? <> Войти </> : 'Регистрация'}
						</Button>

					</Row>
				</Form>
			</Card>
		</div>
	);

}

export default Auth;