import React from 'react';
import "./success.css"
import { FiCheck } from "react-icons/fi"

const Success = () => {
    return (
        <div className='icon'>
            <h1>successfully completed</h1>
            <FiCheck className="tick-icon" />
        </div>
    );
}

export default Success;
