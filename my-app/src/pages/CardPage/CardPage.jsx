import React from 'react';
import './CardPage.css';
import GroupCard from "../../components/GroupCard/GroupCard";
import {data} from "../GroupsPage/GroupsPage";
import {Link, useParams} from "react-router-dom";
const CardPage = () => {
    let {id} = useParams();
    const groupCard = data.find((card)=>card.id===Number(id))
    return (
    <div className="card">
        <Link to="/groups"><span style={{margin:'0 12px', color: 'white'}}>ART OF MOTION</span></Link>
        <Link to={`/groups/${id}`}><span style={{color: 'white'}}>/{groupCard.title}</span></Link>
        <GroupCard{...groupCard}/>
        <span style={{margin:'0 12px', color: 'white'}}>{groupCard.time}</span>
    </div>
    )
};

export default CardPage;