import React, {useCallback, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ReservedCard from "../../components/ReservedCard";
import {useDispatch, useSelector} from "react-redux";
import {getPurchaseAction} from "../../store/actions/purchase";
import {useLoader} from "../../hooks/useLoader";
import {resetPurchaseState} from "../../store/reducers/purchase";
import {getClassesAction} from "../../store/actions/classes";
import EditPurchaseCard from "../../components/EditPurchaseCard";
import {getUsersAction} from "../../store/actions/user";
import {PurchaseStatus} from "../../api/services/purchase";


const EditPurchasesPage = () => {
    const {purchase, isLoading,getPurchaseStatus} = useSelector((store) =>store.purchaseReducer)
    const {classes, getClassesStatus}=useSelector((store)=>store.classesReducer)
    const {users, getUsersStatus} =useSelector((store)=>store.userReducer)
    const dispatch =useDispatch();

    useEffect(()=> {
        if (getClassesStatus ==='initial')
            dispatch(getClassesAction());
    },[getClassesStatus,dispatch])

    useEffect(()=>{
        if (getPurchaseStatus==='initial')
        {
            dispatch(getPurchaseAction());}
    },[getPurchaseStatus, dispatch])
    useLoader([getPurchaseStatus])

    useEffect(()=> {
        if (getUsersStatus ==='initial')
            dispatch(getUsersAction());
    },[getUsersStatus,dispatch])

    const handleFilter = useCallback((filter_status)=>() => {
        console.log(filter_status);
        dispatch(getPurchaseAction({status: filter_status}))}, [dispatch]);

    useEffect( ()=>() => {dispatch(resetPurchaseState());}, [dispatch]);
    return (
        <div className="container">
            <div className="filter">
                <button className='filterButton' onClick={handleFilter(PurchaseStatus.BOOKED)}>{PurchaseStatus.BOOKED}</button>
                <button className='filterButton' onClick={handleFilter(PurchaseStatus.PAID)}>{PurchaseStatus.PAID}</button>
                <button className='filterButton' onClick={handleFilter(PurchaseStatus.PASSED)}>{PurchaseStatus.PASSED}</button>
                <button className='filterButton' onClick={handleFilter()}>ALL</button>
            </div>
            <Container className="mks">
                <Row xs={4} md={4} className="g-4">
                    {Array.from(purchase)?.map((item, index) => {
                        return (
                            <Col key={index}>
                                <EditPurchaseCard {...item}/>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default EditPurchasesPage;