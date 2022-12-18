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
const App = () =>{
    const { isAuthorized } = useSelector((store) => store.authReducer);
    const dispatch = useDispatch();
    const handleChangeAuthState = useCallback(() => {
        dispatch(changeAuthorizedState());
    }, [dispatch]);
    return (
                <BrowserRouter basename="/"  >
                    <Link to="/classes" className="link1"><h1>dance classes</h1></Link>
                    <Link to="/purchase" className="cart" ><img className="logocart" src={'https://img.icons8.com/ios-glyphs/512/shopping-cart.png'} alt="cart" /></Link>
                    <Button onClick={handleChangeAuthState} className="auth"><img className="logoauth" src={'https://img.icons8.com/ios-glyphs/512/user.png'} alt="auth" /></Button>
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
                            <CartPage/>
                        </Route>
                    </Switch>
                </BrowserRouter>
    );
}

export default App;