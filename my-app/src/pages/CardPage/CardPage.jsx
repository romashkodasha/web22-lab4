import React from 'react';
import './CardPage.css';
import ShopCard from "../../components/GroupCard/ShopCard";
import {data} from "../GroupsPage/ShopPage";
import {Link, useParams} from "react-router-dom";
const CardPage = () => {
    let {id} = useParams();
    const groupCard = data.find((card)=>card.id===Number(id))
    return (
    <div className="card">
        <Link to="/groups" className="link"><span className="navigation">CLASSES</span></Link>
        <Link to={`/groups/${id}`} className="link"><span className="navigation">/{groupCard.title}</span></Link>
        <ShopCard{...groupCard}/>
        <span style={{margin:'0 12px', color: 'white'}}>{groupCard.time}</span>
    </div>
    )
};

export default CardPage;