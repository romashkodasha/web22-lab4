import {Card} from "react-bootstrap";
import React, {useCallback, useEffect} from "react";


import {useDispatch, useSelector} from "react-redux";
import {patchPurchaseAction} from "../../store/actions/purchase";
import {getClassesAction} from "../../store/actions/classes";
import {getPurchase, PurchaseStatus} from "../../api/services/purchase";

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}


const EditPurchaseCard = ({id,id_class}) => {
    const {classes, getClassesStatus}=useSelector((store)=>store.classesReducer)
    const {purchase,getPurchaseStatus}= useSelector((store)=>store.purchaseReducer)
    const {users} =useSelector((store)=>store.userReducer)
    const dispatch =useDispatch();
    const classCard = classes.find((card)=>card.id===Number(id_class));
    const purchaseById= purchase.find((card)=>card.id===Number(id));
    const userCard = users?.find((card)=>card.id===purchaseById.id_student)
    const changeStatus=useCallback(
        (purchase_id)=>()=>{
            dispatch(
                patchPurchaseAction({
                    id: purchase_id,
                    status: PurchaseStatus.PAID,
                    date_of_purchase: formatDate(new Date()),
                    id_class: id_class,
                    id_student: purchaseById.id_student
                }),
            );
        },
        [dispatch],
    );
    const bookedStatus=useCallback(
        (purchase_id)=>()=>{
            dispatch(
                patchPurchaseAction({
                    id: purchase_id,
                    status: PurchaseStatus.BOOKED,
                    date_of_purchase: null,
                    id_class: id_class,
                    id_student: purchaseById.id_student
                }),
            );
        },
        [dispatch],
    );
    console.log(id)
    return <Card className="card">
        {userCard && classCard ? <div>
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
            <div>status: {purchaseById.status}</div>
            <div>имя покупателя: {userCard.username}</div>
            <div>почта: {userCard.email}</div>
            <div>забронировано: {purchaseById.date_of_order}</div>
            {purchaseById.status===PurchaseStatus.BOOKED ? <button className="cardButton"  onClick={changeStatus(id)}>оплачено</button>: <button className ="cardButton" onClick={bookedStatus(id)}>отмена</button>}
            {purchaseById.status===PurchaseStatus.PAID ? <span>Дата оплаты: {purchaseById.date_of_purchase}</span> : <span>Не оплачено</span> }
        </Card.Body></div> : <span></span>}
    </Card>
}

export default EditPurchaseCard;