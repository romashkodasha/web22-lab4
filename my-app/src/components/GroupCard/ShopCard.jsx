import {Card} from "react-bootstrap";
import React from "react";
import './ShopCard.css';
import {Link} from "react-router-dom";

const ShopCard = ({id, trainer, date, price,img }) => {
    return <Card className="card">
        <Card.Img className="cardImage" src={img}/>
        <Card.Body>
            <div className="info-mk">
                <Link to={`/classes/${id}`} className= "link">{trainer}</Link>
            </div>
            <div  className="info-mk">
                <Card.Text className="info">
                    price: {price} р.
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
}

export default ShopCard;