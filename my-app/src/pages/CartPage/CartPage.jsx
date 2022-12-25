import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ReservedCard from "../../components/ReservedCard";
import {useDispatch, useSelector} from "react-redux";
import {getPurchaseAction} from "../../store/actions/purchase";
import {useLoader} from "../../hooks/useLoader";
import {resetPurchaseState} from "../../store/reducers/purchase";
import {getClassesAction} from "../../store/actions/classes";


const CartPage = () => {
    const {purchase, isLoading,getPurchaseStatus} = useSelector((store) =>store.purchaseReducer)
    const {classes, getClassesStatus}=useSelector((store)=>store.classesReducer)
    const {user} =useSelector((store)=>store.userReducer)
    const dispatch =useDispatch();
    useEffect(()=> {
        if (getClassesStatus ==='initial')
            dispatch(getClassesAction());
    },[getClassesStatus,dispatch])
    useEffect(()=>{
        if (getPurchaseStatus==='initial')
        {console.log(user.id);
            dispatch(getPurchaseAction({user_id: user.id}));}
    },[getPurchaseStatus, dispatch])
    useLoader([getPurchaseStatus])
    console.log(purchase)
    useEffect( ()=>() => {dispatch(resetPurchaseState());}, [dispatch]);
    return (
        <div className="container">
            <Container className="mks">
                <Row xs={4} md={4} className="g-4">
                    {Array.from(purchase)?.map((item, index) => {
                        return (
                            <Col key={index}>
                                <ReservedCard {...item}/>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default CartPage;