import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {useAppDispatch} from "./hooks/useAppDispatch";
import s0 from './App.module.scss'
import {Spinner} from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import NavBar from "./components/NavBar/NavBar";
import {authRoutes, publicRoutes} from "./routes"
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Eleonora from "./assets/sound/Eleonora.mp3";
import {Howl, Howler} from 'howler';

var music = new Howl({
  src: [Eleonora],
  // autoplay: true,
  loop: true,
  volume: 0.5,
  html5: true,
});

function App() {

  // const {user,isAuth} = useSelector((state: RootState) => state.profilePage)`
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const [isAuth, setIsAuth] = useState<boolean>(true)

  // useEffect(() => {
  //   check().then(data=>{
  //     dispatch(setLogin(user.userID))
  //   }).finally(()=>setLoading(false))
  // })

  if (!loading)
    return <Spinner animation={"grow"}/>


  return (

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
            <Route path={"*"} element={<ErrorPage message={"404"}/>}/>
          </Routes>

        </PageWrapper>
      </div>

      {/*<Footer/>*/}
    </div>
  );
}

export default App;
