import React, { useEffect, useState } from 'react';


import './PageLoader.css';
import {useSelector} from "react-redux";


export const PageLoader = ({ zIndex }) => {
    const { isLoading } = useSelector((store) => store.loaderReducer);
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        setIsShow(true);

        const setTimeoutId = setTimeout(() => {
            setIsShow(false);
        }, 1000);

        return () => {
            clearTimeout(setTimeoutId);
        };
    }, [isLoading]);

    if (isShow || isLoading) {
        return (
            <div className='pageLoader' style={{ zIndex }}>
                <div className='pageLoader-loader'>
                    <img src='https://media1.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=ecf05e474mxsquo6p8596okx1m2zw6efw19cy11xbclwf4wl&rid=giphy.gif&ct=g' alt='loading'></img>
                </div>
            </div>
        );
    }

    return null;
};
