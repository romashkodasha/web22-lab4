import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import {useDispatch, useSelector} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import { authorizationAction } from '../../store/actions/user';
import './AuthPage.css';
import {Redirect} from "react-router";

export const AuthPage = () => {
    const dispatch = useDispatch();
    const { isAuthorized, user } = useSelector((store) => store.userReducer);
    console.log(isAuthorized, user);
    const onSubmit = useCallback(
        (values) => {
            dispatch(authorizationAction(values));
        },
        [dispatch],
    );

    if (isAuthorized && user?.is_staff) {
        return <Redirect to="/" />; //Navigate
    }
    else if (isAuthorized && !user?.is_staff){
        return <Redirect to="/classes" />;
    }

    return (
        <div className="block">
            <div className="authentication">Авторизация</div>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="form">
                        <Field name="username">
                            {({ input }) => <input {...input} className="input" placeholder="Введите имя пользователя"/>}
                        </Field>
                        <Field name="password">
                            {({ input }) => <input {...input} className="input" placeholder="Введите пароль"/>}
                        </Field>
                        <button className="login" type="submit">
                            Войти
                        </button>
                    </form>
                )}
        </Form>
    <Link to="/registration" className="registration" type="button">
        Регистрация
    </Link>
</div>
);
};

export default AuthPage;