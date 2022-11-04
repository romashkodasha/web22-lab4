import {BrowserRouter, Route, Link, Switch, useParams} from "react-router-dom";
import ShopPage from "./pages/GroupsPage/ShopPage";
import CardPage from "./pages/CardPage/CardPage";
import StartPage from "./pages/StartPage/StartPage";
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap'

function App() {
    return (
        <BrowserRouter basename="/"  >
                    <Link to="/" className="link1"><h1>DANCE CLASSES</h1></Link>
                    <Link to="/groups"><h2 className="link2">view events</h2></Link>
                <Switch>
                    <Route exact path="/">
                        <StartPage/>
                    </Route>
                    <Route path="/groups" exact={true}>
                        <ShopPage/>
                    </Route>
                    <Route path="/groups/:id" component={CardPage}>
                    </Route>
                </Switch>
        </BrowserRouter>
    );
}

export default App;