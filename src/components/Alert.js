import React from 'react';

function Alert(props) {
    return (
        <div id='alert-container' style={{height: "50px"}}>
            {props.alert && 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.message}</strong>
                <button onClick={props.removeAlert} className='btn-close shadow-none' data-bs-dismiss="alert" aria-label='Close'></button>
            </div>}
        </div>
    );
}

export default Alert;