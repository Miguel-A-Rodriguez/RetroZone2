import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";



export default function CheckOut() {
    let history = useHistory();
    
    function handleSubmitRedirect() {
      history.push("/GiftCard2");
    }

    // after getting the state values from giftcard 
    // convert the states into variables that can be passed into the input fields of the
    // stripe api component
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state.price); // result: 'some_value'
       console.log(location.state.personalMessageText); // result: 'some_value'
       console.log(location.state.date); // result: 'some_value'
       console.log(location.state.finalDate); // result: 'some_value'
    }, [location]);

    const date = JSON.stringify(location.state.date);
    const finallyDate = JSON.stringify(location.state.finalDate);
    return (
        <div>
            <button type="button" onClick={() => history.goBack()}>Return</button>
            <button>{location.state.price}</button>
            <button>{date}</button>
            <button>{finallyDate}</button>
        </div>
    )
}
