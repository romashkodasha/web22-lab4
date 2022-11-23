import React, {useContext} from 'react';
import './CardPage.css';
import ShopCard from "../../components/GroupCard/ShopCard";
import {Link, useParams} from "react-router-dom";
import {Context} from "../../Context";
const CardPage = () => {
    let {id} = useParams();
    const [context, setContext] = useContext(Context);
    console.log(context);
    const classCard = context.find((card)=>card.id===Number(id));
    return (
    <div className="card">
        <Link to="/classes" className="link"><span className="navigation">CLASSES</span></Link>
        <Link to={`/classes/${id}`} className="link"><span className="navigation">/{classCard.title}</span></Link>
        <div className="class"><ShopCard{...classCard}/></div>
        <span style={{margin:'0 12px', color: 'white'}}>{classCard.time}</span>
    </div>
    )
};

export default CardPage;