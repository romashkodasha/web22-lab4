import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ShopCard from "../../components/GroupCard/ShopCard";
import './ShopPage.css';
import {Link} from "react-router-dom";
export const data = [{'title': 'gallaction', 'id': 1, 'sch': 'вторник, четверг', 'time':'19:00-20:00', 'img':'https://sun9-79.userapi.com/impg/k292oa3h3guw2P1wJKXlj_mBzBa5f_d12zLUVg/L0Z79K4m-4M.jpg?size=556x556&quality=95&sign=335d286b4e85d481a55ca636d5ea7bf4&type=album'},
    {'title': 'forginme', 'id': 2, 'sch': 'вторник, четверг', 'time':'15:00-16:00', 'img':'https://sun9-44.userapi.com/impg/sGgJ0FEycNOgZauQor0TaGy2YK5PLtDLieYq6g/5sGc9lYityU.jpg?size=558x558&quality=95&sign=7bfbf723e9acb7e109f2a8685910d3f9&type=album'},
    {'title': 'Аня Тарасенко', 'id': 3, 'sch': 'понедельник, среда', 'time':'19:00-20:00', 'img':'https://sun9-77.userapi.com/impg/K9ShZNC7EEpSZEeRqsqbSGpPlewL2HGEIZUQcw/AUa3dmh8_44.jpg?size=556x556&quality=95&sign=0e15efeebb80e9d72dc3a431ecc8d66f&type=album'},
    {'title': 'ArtVaden', 'id': 4, 'sch': 'понедельник, среда', 'time':'15:00-16:00', 'img':'https://sun9-26.userapi.com/impg/7dAzL58NbPzR2J4elTB-KO498WTyFBLo13R7RA/l1NxHNtwn1w.jpg?size=511x511&quality=95&sign=db73f21f244b9ec642675169b7002bd6&type=album'},
    {'title': 'Aidar&Dron', 'id': 5, 'sch': 'понедельник, среда', 'time':'17:00-18:00', 'img':'https://sun9-79.userapi.com/impg/B10o5PlHnaiJ58Nh3VlLxxkBQOb697jAChl4kg/k4ZM4t0PzMg.jpg?size=503x503&quality=95&sign=b453c2540993c5349e7957803d96306c&type=album'}];

function ShopPage() {

    return (
        <div className="container">
            <Link to="/groups" className="link"><span className="navigation">CLASSES</span></Link>
            {!data.length ? <h1>К сожалению, пока ничего не найдено :(</h1>:
                <Container className="mks">
                <Row xs={4} md={4} className="g-4">
                    {data.map((item, index)=>{
                        return (
                            <Col key={index}>
                                <ShopCard {...item}/>
                            </Col>
                        )
                    })}
                </Row>
                </Container>
            }
        </div>
    );
}

export default ShopPage;