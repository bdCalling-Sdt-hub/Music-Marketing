import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoNotificationsCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Notification = () => {
    return (
        <div>
            <div className='mb-10'>
                <Link className='flex items-center gap-3 font-semibold text-3xl' to="/admin/notification"><FaArrowLeft className='text-2xl font-semibold' /> Notification</Link>
            </div>
            {
                [...Array(5)].map((_, index) => (
                    <div className='flex mt-3 items-center gap-5 cursor-pointer duration-300 border border-gray-300 p-4 hover:bg-gray-200 rounded-lg'>
                        <IoNotificationsCircleOutline className='text-5xl ' />
                        <div>
                            <h2 className='text-xl font-semibold'>No Notification</h2>
                            <p className='text-gray-500'>There is no notification Lorem ipsum dolor sit amet consectetur adipisicing elit. ......</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Notification;
