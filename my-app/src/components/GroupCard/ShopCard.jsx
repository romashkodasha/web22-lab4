import {Card} from "react-bootstrap";
import React from "react";
import './ShopCard.css';
import {Link} from "react-router-dom";

const ShopCard = ({img, time, sch, title, id }) => {

    return <Card className="card">
        <Card.Img className="cardImage" src={img}/>
        <Card.Body>
            <div className="info-mk">
                <Link to={`/groups/${id}`} className= "link">{title}</Link>
            </div>
            <div  className="info-mk">
                <Card.Text>
                    {sch}
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
}

export default ShopCard;