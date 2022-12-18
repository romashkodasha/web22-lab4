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
import {changeAuthorizedState} from "../../store/reducers/auth";
import {getPurchaseAction} from "../../store/actions/purchase";


const ShopPage = () => {
    const{classes, getPurchaseStatus, isLoading, getClassesStatus, getClassesPriceRangeStatus, classesPriceRange, getClassByNameStatus}=useSelector((store) =>store.classesReducer)
    const { isAuthorized } = useSelector((store) => store.authReducer);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [searchMinValue, setSearchMinValue] = useState('');
    const [searchMaxValue, setSearchMaxValue] = useState('');

    const handleSearch = async () => {
        dispatch(getClassByNameAction(searchValue));
    }
    const handleSearchMinMax = useCallback(() => {
        // if (searchMinValue<classesPriceRange.price_min) setSearchMinValue(classesPriceRange.price_min)
        // if (searchMaxValue>classesPriceRange.price_max) setSearchMinValue(classesPriceRange.price_max)
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



    useEffect(() => {dispatch(resetClassesState());}, [dispatch]);
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