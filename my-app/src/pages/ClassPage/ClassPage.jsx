import React, {useCallback, useContext, useEffect} from 'react';
import './ClassPage.css';
import ClassCard from "../../components/ClassCard/ClassCard";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editClassAction, getClassByIdAction, postClassAction} from "../../store/actions/classes";
import {PageLoader} from "../../components/PageLoader";
import {Field, Form} from "react-final-form";

const ClassPage = () => {
    let {id} = useParams();
    const{classes,editClassStatus, getClassByIdStatus}=useSelector((store) =>store.classesReducer)
    const {user}=useSelector((store)=>store.userReducer)
    const dispatch = useDispatch();
    useEffect(()=>{
        if (getClassByIdStatus==='initial')
            dispatch(getClassByIdAction(id));
    },[getClassByIdStatus,dispatch])
    const deleteCard =useCallback(()=>{
        dispatch(editClassAction({
            id: Number(classes.id),
            status: false,
            trainer: classes.trainer,
            date: classes.date,
        }));
    },[editClassStatus,dispatch])
    const editCard = useCallback(
        (values) => {
            dispatch(editClassAction({
                id: Number(classes.id),
                trainer: values?.trainer ?? classes.trainer,
                date: values?.date ?? classes.date,
                price: values?.price,
                place: values?.place,
                descr: values?.descr,
                img: values?.img,
            }));
        },
        [dispatch, editClassStatus],
    );
    return (
    <div className="card">
        <PageLoader/>
        <Link to="/classes" className="link"><span className="navigation">CLASSES</span></Link>
        <Link to={`/classes/${id}`} className="link"><span className="navigation">/{classes.trainer}</span></Link>
        <div className="class"><ClassCard{...classes}/></div>
        <span style={{margin:'0 12px', color: 'white'}}>{classes.time}</span>
        {user ? user.is_staff ? (<button className="cardButton"  onClick={deleteCard}>удалить</button>):(<></>): (<></>)}

        {user ? user.is_staff ? (<Form onSubmit={editCard}>
            {({ handleSubmit}) => (
                <form onSubmit={handleSubmit} className='form'>
                    <Field name="trainer">
                        {({ input, meta }) => (
                            <input
                                {...input}
                                placeholder="имя проподавателя"
                                className='input'
                                defaultValue={classes.trainer}
                            />
                        )}
                    </Field>
                    <Field name="date">
                        {({ input, meta }) => (
                            <input
                                {...input}
                                type="datetime-local"
                                className='input'
                                defaultValue='2022-12-12'
                            />
                        )}
                    </Field>
                    <Field name="price">
                        {({ input, meta }) => (
                            <input
                                {...input}
                                placeholder="стоимость"
                                className='input'
                                defaultValue={classes.price}
                            />
                        )}
                    </Field>
                    <Field name="place">
                        {({ input, meta }) => (
                            <input
                                {...input}
                                placeholder="название студии проведения"
                                className='input'
                                defaultValue={classes.place}
                            />
                        )}
                    </Field>
                    <Field name="descr">
                        {({ input, meta }) => (
                            <input
                                {...input}
                                placeholder="краткое описание"
                                className='input'
                                defaultValue={classes.descr}
                            />
                        )}
                    </Field>
                    <Field name="img">
                        {({ input, meta }) => (
                            <input
                                {...input}
                                placeholder="url афиши"
                                className='input'
                                defaultValue={classes.url}
                            />
                        )}
                    </Field>
                    <button className='button' type="submit">
                        Изменить мастер-класс
                    </button>
                </form>
            )}
        </Form>):(<></>): (<></>)}
    </div>
    )
};

export default ClassPage;