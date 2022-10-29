import {BrowserRouter, Route, Link, Switch, useParams} from "react-router-dom";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
import CardPage from "./pages/CardPage/CardPage";
import { Navbar, Container, Nav } from 'react-bootstrap'

function App() {
    return (
        <BrowserRouter basename="/" >
                <Container>
                    <Link to="/"><span style={{margin:'0 12px'}}>Стартовая страница</span></Link>
                    <Link to="/groups"><span style={{margin:'0 12px'}}>Страница с карточками</span></Link>
                </Container>
                <Switch>
                    <Route exact path="/">
                        <h1>Студия танца ART OF MOTION</h1>
                    </Route>
                    <Route path="/groups" exact={true}>
                        <GroupsPage/>
                    </Route>
                    <Route path="/groups/:id" component={CardPage}>
                    </Route>
                </Switch>
        </BrowserRouter>
    );
}

export default App;