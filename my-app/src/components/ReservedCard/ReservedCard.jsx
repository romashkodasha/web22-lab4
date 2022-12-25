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
    const purchaseById= purchase.find((card)=>card.id===Number(id));
    const classCard = classes.find((card)=>card.id===Number(id_class));
    const deleteCard =useCallback(()=>{
        dispatch(deletePurchaseAction(id));
    },[deletePurchaseStatus,dispatch])
    console.log(purchaseById)
    if(classCard){
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
                status: {purchaseById.status}
            </div>
            <button className="cardButton"  onClick={deleteCard}>удалить</button>
        </Card.Body>
    </Card>}
}

export default ReservedCard;