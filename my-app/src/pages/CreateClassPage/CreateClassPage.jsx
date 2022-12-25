import React, { useCallback, useState } from 'react';
import { Field, Form } from 'react-final-form';
import {useDispatch, useSelector} from 'react-redux';
import './CreateClassPage.css';
import {postClassAction} from "../../store/actions/classes";

export const CreateClassPage= () => {

    const dispatch = useDispatch();
    const{classes, postClassStatus, getClassesStatus}=useSelector((store) =>store.classesReducer)
    const onSubmit = useCallback(
        (values) => {
            dispatch(postClassAction(values));
        },
        [dispatch, postClassStatus],
    );

    return (
        <div className="block">
            <div className='title'>Добавление мастер-класса</div>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit}) => (
                    <form onSubmit={handleSubmit} className='form'>
                        <Field name="trainer">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    placeholder="имя проподавателя"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="date">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    type="datetime-local"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="price">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    placeholder="стоимость"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="place">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    placeholder="название студии проведения"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="descr">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    placeholder="краткое описание"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="img">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    placeholder="url афиши"
                                    className='input'
                                />
                            )}
                        </Field>
                        <button className='button' type="submit">
                            Добавить мастер-класс
                        </button>
                    </form>
                )}
            </Form>
        </div>

    );

};
export default CreateClassPage;