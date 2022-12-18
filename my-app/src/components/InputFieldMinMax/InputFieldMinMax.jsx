import {Button} from "react-bootstrap";
import React, {useCallback} from "react";
import './InputFieldMinMax.css';

const InputFieldMinMax = ({ minvalue, setMinValue, maxValue, setMaxValue, onSubmit, loading, minplaceholder, maxplaceholder, buttonTitle = 'Поиск'}) => {
    const mymin = useCallback((event)=>{ setMinValue(event.target.value)},[]);
    const mymax = useCallback((event)=>{ setMaxValue(event.target.value)},[]);

    return <div className="inputFieldMinMax">
        <input value={minvalue} placeholder={minplaceholder} onChange={mymin}/>
        <input value={maxValue} placeholder={maxplaceholder} onChange={mymax}/>
        <Button disabled={loading} onClick={onSubmit}>{buttonTitle}</Button>
    </div>
}

export default InputFieldMinMax