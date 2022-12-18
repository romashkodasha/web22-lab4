import {Card} from "react-bootstrap";
import React, {useCallback, useEffect} from "react";
import './ReservedCard.css';

import {useDispatch, useSelector} from "react-redux";
import {deletePurchaseAction} from "../../store/actions/purchase";
import {getClassesAction} from "../../store/actions/classes";



const ReservedCard = ({id,id_class}) => {
    const {classes, getClassesStatus}=useSelector((store)=>store.classesReducer)
    const {purchase,deletePurchaseStatus}= useSelector((store)=>store.purchaseReducer)
    const dispatch =useDispatch();
    const classCard = classes.find((card)=>card.id===Number(id_class));
    const deleteCard =useCallback(()=>{
        console.log(id);
        dispatch(deletePurchaseAction(id));
    },[deletePurchaseStatus,dispatch])
    return <Card className="card">
        <Card.Img className="cardImage" src={classCard['img']}/>
        <Card.Body>
            <div className="info-mk">
                <Card.Text>{classCard['trainer']}</Card.Text>
            </div>
            <div  className="info-mk">
                <Card.Text className="info">
                    price: {classCard['price']} р.
                </Card.Text>
            </div>
            <button className="cardButton"  onClick={deleteCard}>удалить</button>
        </Card.Body>
    </Card>
}

export default ReservedCard;