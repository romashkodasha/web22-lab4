import React from "react";
import './StartPage.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function StartPage() {
    const {user} = useSelector((store)=>store.userReducer)
    return (
        <div className="container">
            {user? user.is_staff ? (<Link to="/createclass" className="link"><span className="navigation">Добавить мастер-классы</span></Link>):(<></>):(<></>)}
            {user? user.is_staff ? (<Link to="/editpurchases" className="link"><span className="navigation">Заказы</span></Link>):(<></>):(<></>)}
        </div>
    );
}
export default StartPage;