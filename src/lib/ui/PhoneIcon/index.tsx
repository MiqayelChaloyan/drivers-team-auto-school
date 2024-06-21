import React, { useState } from 'react';
import { MdOutlinePhone } from "react-icons/md";

import './style.css'

const PhoneIcon = () => {

    return (
        <div className="content-center">
            <div className="pulse"> <MdOutlinePhone size={25} color='white' /> </div>
        </div>
    );
};

export default PhoneIcon;
