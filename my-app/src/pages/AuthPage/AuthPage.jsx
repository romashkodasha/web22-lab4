import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import {useDispatch, useSelector} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import { authorizationAction } from '../../store/actions/user';
import './AuthPage.css';

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

    if (isAuthorized) {
        console.log('test');
        return <NavLink to="/" />; //Navigate
    }

    return (
        <div>
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
                        <button className="button" type="submit">
                            Войти
                        </button>
                    </form>
                )}
        </Form>
    <Link to="/registration" className="button" type="button">
        Регистрация
    </Link>
</div>
);
};

export default AuthPage;