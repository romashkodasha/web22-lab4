import React, { useCallback, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { validateRegistrationForm } from './utils';
import { registrationAction } from '../../store/actions/user';
import './RegistrationPage.css';

export const RegistrationPage= () => {

    const dispatch = useDispatch();
    const [registration, setRegistration] = useState(false);
    const onSubmit = useCallback(
        (values) => {
            dispatch(registrationAction(values));
            setRegistration(true);
        },
        [dispatch],
    );

    if (registration) {
        return <NavLink to="/auth" />;
    }
    return (
        <div className="block">
            <div className='title'>Регистрация</div>
            <Form onSubmit={onSubmit} validate={validateRegistrationForm} >
                {({ handleSubmit}) => (
                    <form onSubmit={handleSubmit} className='form'>
                        <Field name="username">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    placeholder="Введите имя пользователя"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    type="password"
                                    placeholder="Введите пароль"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    placeholder="Введите email"
                                    type="email"
                                    className='input'
                                />
                            )}
                        </Field>
                        <Field name="birth_date">
                            {({ input, meta }) => (
                                <input
                                    {...input}
                                    type="date"
                                    className='input'
                                />
                            )}
                        </Field>
                        <button className='button' type="submit">
                            Зарегистрироваться
                        </button>
                    </form>
                )}
        </Form>
</div>

);

};
export default RegistrationPage;