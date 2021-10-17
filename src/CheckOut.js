import React from 'react';
import { useHistory } from "react-router-dom";




export default function CheckOut() {
    let history = useHistory();
    
    function handleSubmitRedirect() {
      history.push("/GiftCard2");
    }
    return (
        <div>
            <button type="button" onClick={() => history.goBack()}>Return</button>
        </div>
    )
}
