import {Card} from "react-bootstrap";
import React, {useCallback, useContext, useEffect, useState} from "react";
import './ClassCard.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPurchaseAction, postPurchaseAction} from "../../store/actions/purchase";

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

const ClassCard = ({id, trainer, date, price,img }) => {
    const {purchase,postPurchaseStatus, getPurchaseStatus}=useSelector((store)=>store.purchaseReducer)
    const {classes}=useSelector((store)=>store.classesReducer)
    const { isAuthorized } = useSelector((store) => store.authReducer);
    const [isReserved, setReserved]=useState(false);
    const dispatch=useDispatch();
    useEffect(()=>{
        if (getPurchaseStatus==='initial')
            dispatch(getPurchaseAction());
    },[getPurchaseStatus, dispatch])
    useEffect(()=>{
       if (Array.from(purchase).find(e => e.id_class === id))
           setReserved(true);
        //если id можно найти среди id_class в purchase, то ставим true
        console.log(id);
        console.log(isReserved);
    })

    const makeOrder =useCallback(()=>{
        setReserved(true)
         dispatch(postPurchaseAction({
             id_class:id,
             id_student:1,
             date_of_order: formatDate(new Date()),
             date_of_purchase: null,
             status: 'Введен'
         }))
     },[postPurchaseStatus,dispatch]);
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
            <button className="cardButton"  onClick={makeOrder} disabled={(!isAuthorized)||(isReserved)}>забронировать</button>
        </Card.Body>
    </Card>
}

export default ClassCard;