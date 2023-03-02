import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useAppDispatch} from "./hooks/useAppDispatch";
import s0 from './App.module.scss'
import {Spinner} from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import NavBar from "./components/NavBar/NavBar";
import {authRoutes, publicRoutes, telRoutes} from "./routes"
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {Howl, Howler} from 'howler';
// @ts-ignore
import Eleonora from "./assets/sound/Eleonora.mp3";
import {RootState} from "./store/store";
import {useAppSelector} from "./hooks/useAppSelector";

const music = new Howl({
	src: [Eleonora],
	// autoplay: true,
	loop: true,
	volume: 0.5,
	html5: true,
});

function App() {

	const [loading, setLoading] = useState<boolean>(true)
	const dispatch = useAppDispatch()

	const {user, isAuth} = useAppSelector((state: RootState) => state.profilePage)

	// useEffect(() => {
	//   check().then(data=>{
	//     dispatch(setLogin(user.userID))
	//   }).finally(()=>setLoading(false))
	// })

	if (!loading)
		return <Spinner animation={"grow"}/>


	return (
		<div>
			{/*<div className={s0.oldFilm}>*/}
			{/*<div className={s0.film}>*/}
			{/*<div className={s0.effect}>*/}
			<div className={s0.grain}>

			<div className={`${s0.fullWindow}`}>


				<Header/>

				<div className={`${s0.wrapper__body}`}>
					<NavBar music={music}/>

					<PageWrapper>
						<Routes>
							{isAuth && authRoutes.map(({path, Component}) =>
								<Route key={path} path={path} element={<Component/>}/>
							)}
							{publicRoutes.map(({path, Component}) =>
								<Route key={path} path={path} element={<Component/>}/>
							)}
							{telRoutes.map(({path, Component}) =>
								<Route key={path} path={path} element={<Component/>}/>
							)}
							<Route path={"*"} element={<ErrorPage message={"404"}/>}/>
						</Routes>
					</PageWrapper>

				</div>

				{/*<Footer/>*/}
				</div>
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
			</div>
		</div>
	);
}

export default App;
