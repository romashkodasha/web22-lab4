import {BrowserRouter, Route, Link, Switch, useParams} from "react-router-dom";
import ShopPage from "./pages/GroupsPage/ShopPage";
import CardPage from "./pages/CardPage/CardPage";
import StartPage from "./pages/StartPage/StartPage";
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import {useState} from "react";
import {Context} from "./Context";
function App() {
    const [context, setContext] = useState(["default"])
    return (
        <Context.Provider value={[context, setContext]}>
            <BrowserRouter basename="/"  >
                <Link to="/" className="link1"><h1>dance classes</h1></Link>
                <Link to="/classes"><h2 className="link2">view events</h2></Link>
                <Link to="/purchases" className=""> </Link>
                <Switch>
                    <Route exact path="/">
                        <StartPage/>
                    </Route>
                    <Route path="/classes" exact={true}>
                        <ShopPage/>
                    </Route>
                    <Route path="/classes/:id" component={CardPage}>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;