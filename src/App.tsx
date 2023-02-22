import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {RootState} from "./store/store";
import {Spinner} from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  // const {user,isAuth} = useSelector((state: RootState) => state.profilePage)
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   check().then(data=>{
  //     dispatch(setLogin(user.userID))
  //   }).finally(()=>setLoading(false))
  // })

  if (!loading)
    return <Spinner animation={"grow"}/>


  return (
    <div className="App">

      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>

      <Footer/>
    </div>
  );
}

export default App;
