import {Card} from "react-bootstrap";
import React from "react";
import './GroupCard.css';
import {Link} from "react-router-dom";

const GroupCard = ({img, time, sch, title, id }) => {

    return <Card className="card">
        <Card.Img className="cardImage" variant="top" src={img} height={100} width={100}  />
        <Card.Body>
            <div className="textStyle">
                <Link to={`/groups/${id}`} style={{ textDecoration: 'none' }}>{title}</Link>
            </div>
            <div  className="textStyle">
                <Card.Text>
                    {sch}
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
}

export default GroupCard;