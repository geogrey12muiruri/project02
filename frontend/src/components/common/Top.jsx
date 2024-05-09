// TopSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IoNotifications } from 'react-icons/io5';
import logo from '../../assets/medplus.svg';
import doctor from '../../assets/doc.png';

const TopSection = ({ authUser }) => (
    <div className="bg-gray-800 text-white p-4 flex sticky top-0 z-50 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] items-center justify-between">
        <div className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            
            </div>
        </div>
        <div className="flex items-center justify-center flex-1">
            <img src={logo} alt="Logo" className="h-8 w-8" />
        </div>
        <div className="flex items-center">
            <img src={doctor} alt="Doctor" className="h-8 w-8" />
            <Link to='/notifications'>
                <IoNotifications className="text-2xl ml-4" />
            </Link>
        </div>
    </div>
);

export default TopSection;
