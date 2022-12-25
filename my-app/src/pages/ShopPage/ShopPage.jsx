import React, {useCallback, useContext, useEffect, useReducer, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import ClassCard from "../../components/ClassCard/ClassCard";
import './ShopPage.css';
import {Link} from "react-router-dom";
import InputField from "../../components/InputField";
import {useDispatch, useSelector} from "react-redux";
import {getClassByNameAction, getClassesAction, getClassesPriceRangeAction} from "../../store/actions/classes";
import {useLoader} from "../../hooks/useLoader";
import {PageLoader} from "../../components/PageLoader";
import {resetClassesState} from "../../store/reducers/classes";
import InputFieldMinMax from "../../components/InputFieldMinMax/InputFieldMinMax";
import {getPurchaseAction} from "../../store/actions/purchase";
import {resetPurchaseState} from "../../store/reducers/purchase";


const ShopPage = () => {
    const{classes, isLoading, getClassesStatus, getClassesPriceRangeStatus, classesPriceRange, getClassByNameStatus}=useSelector((store) =>store.classesReducer)
    const dispatch = useDispatch();
    const{purchase, getPurchaseStatus}=useSelector((store)=>store.purchaseReducer)
    const {user, isAuthorized} = useSelector((store)=>store.userReducer)
    const [searchValue, setSearchValue] = useState('');
    const [searchMinValue, setSearchMinValue] = useState('');
    const [searchMaxValue, setSearchMaxValue] = useState('');

    useEffect(()=>{
        if (getPurchaseStatus==='initial' && user)
            console.log(user.id);
            dispatch(getPurchaseAction({user_id: user?.id}));
    },[getPurchaseStatus, purchase, user, dispatch])
    const handleSearch = async () => {
        dispatch(getClassByNameAction(searchValue));
    }
    const handleSearchMinMax = useCallback(() => {
        dispatch(getClassesAction({minPrice: searchMinValue, maxPrice: searchMaxValue}))
        },[dispatch]
    );
    useEffect(()=> {
        if (getClassesStatus ==='initial')
            dispatch(getClassesAction());
    },[getClassesStatus,dispatch])

    useLoader([getClassesStatus,getClassesPriceRangeStatus,getClassByNameStatus])

    useEffect(()=>{
        if (getClassesPriceRangeStatus ==='initial')
            dispatch(getClassesPriceRangeAction());
    },[getClassesPriceRangeStatus,dispatch])


    useEffect(()=>()=> {dispatch(resetPurchaseState());dispatch(resetClassesState());}, [dispatch]);
    return (
                <div className="container">
                    <PageLoader/>
                    <Link to="/classes/" className="link"><span className="navigation">CLASSES</span></Link>
                    <InputField value = {searchValue} setValue={setSearchValue} loading={isLoading} onSubmit={handleSearch} buttonTitle="Искать"/>
                    <InputFieldMinMax minvalue={searchMinValue} setMinValue={setSearchMinValue} maxValue={searchMaxValue} setMaxValue={setSearchMaxValue} loading={isLoading} minplaceholder={classesPriceRange.price_min +' руб.'} maxplaceholder={classesPriceRange.price_max + ' руб.'} onSubmit={handleSearchMinMax}/>
                    <Container className="mks">
                            <Row xs={4} md={4} className="g-4">
                                {Array.from(classes).map((item, index) => {
                                    return (
                                        <Col key={index}>
                                            <ClassCard {...item}/>
                                        </Col>
                                    )
                                })}
                            </Row>
                    </Container>
                </div>
        );
}

export default ShopPage;