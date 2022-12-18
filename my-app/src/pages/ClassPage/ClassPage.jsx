import React, {useContext, useEffect} from 'react';
import './ClassPage.css';
import ClassCard from "../../components/ClassCard/ClassCard";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getClassByIdAction} from "../../store/actions/classes";
import {PageLoader} from "../../components/PageLoader";

const ClassPage = () => {
    let {id} = useParams();
    const{classes, getClassByIdStatus}=useSelector((store) =>store.classesReducer)
    const dispatch = useDispatch();
    useEffect(()=>{
        if (getClassByIdStatus==='initial')
            dispatch(getClassByIdAction(id));
    },[getClassByIdStatus,dispatch])
    return (
    <div className="card">
        <PageLoader/>
        <Link to="/classes" className="link"><span className="navigation">CLASSES</span></Link>
        <Link to={`/classes/${id}`} className="link"><span className="navigation">/{classes.trainer}</span></Link>
        <div className="class"><ClassCard{...classes}/></div>
        <span style={{margin:'0 12px', color: 'white'}}>{classes.time}</span>
    </div>
    )
};

export default ClassPage;