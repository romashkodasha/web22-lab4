import {BrowserRouter, Route, Link, Switch, useParams} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import ClassPage from "./pages/ClassPage/ClassPage";
import StartPage from "./pages/StartPage/StartPage";
import './App.css';
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import React, {useCallback, useState} from "react";

import CartPage from "./pages/CartPage";
import {changeAuthorizedState} from "./store/reducers/auth";
import {useDispatch, useSelector} from "react-redux";
import AuthPage from "./pages/AuthPage";
import {unAuthorizeAction} from "./store/actions/user";
import RegistrationPage from "./pages/RegistrationPage";
const App = () =>{
    const { isAuthorized } = useSelector((store) => store.userReducer);
    const dispatch = useDispatch();
    const handleLogout = useCallback(() => {
        dispatch(unAuthorizeAction());
    }, [dispatch]);
    // const handleChangeAuthState = useCallback(() => {
    //     dispatch(changeAuthorizedState());
    // }, [dispatch]);
    return (
                <BrowserRouter basename="/"  >
                    <Link to="/classes" className="link1"><h1>dance classes</h1></Link>
                    <Link to="/purchase" className="cart" ><img className="logocart" src={'https://img.icons8.com/ios-glyphs/512/shopping-cart.png'} alt="cart" /></Link>
                    {isAuthorized ? (
                        <button onClick={handleLogout}>
                            <img className="logoauth" src={'https://img.icons8.com/ios-glyphs/512/exit.png'} alt='auth'/>
                        </button>
                    ) : (
                        <Link to="/auth" className="auth">
                            <img className="logoauth" src={'https://img.icons8.com/ios-glyphs/512/user.png'} alt="auth"/>
                        </Link>
                    )}
                    {/*<Link to="/auth" className="auth"><img className="logoauth" src={'https://img.icons8.com/ios-glyphs/512/user.png'} alt="auth" /></Link>*/}
                    <Switch>
                        <Route exact path="/">
                            <StartPage/>
                        </Route>
                        <Route path="/classes" exact={true}>
                            <ShopPage/>
                        </Route>
                        <Route path="/classes/:id" component={ClassPage}>
                        </Route>
                        <Route path="/purchase">
                            {isAuthorized ? <CartPage/> :<AuthPage/>}
                        </Route>
                        <Route path="/auth"> <AuthPage/> </Route>
                        <Route path="/registration"><RegistrationPage/></Route>
                    </Switch>
                </BrowserRouter>
    );
}

export default App;