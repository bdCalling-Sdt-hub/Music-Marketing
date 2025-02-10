import React from 'react';
import { Link } from 'react-router-dom';

const AdminInfluencerPay = () => {
    return (
        <div className='h-[70vh] flex items-center justify-center'>
            <div className='max-w-[600px] w-full mx-auto '>
                <p className='my-5 text-gray-400'>Name: Maria</p>
                <p className='my-5 text-gray-400'>Account No: 0020202034</p>
                <h2 className='flex my-5 items-center justify-between gap-5 text-3xl font-semibold'>Total Amount <span> $1,545.00</span></h2>
                <h2 className='flex my-5 items-center justify-between gap-5 text-3xl font-semibold'>Due<span> $45.00</span></h2>
                <Link to={`/admin/influencers/pay-success`} className='py-3 my-5 w-full block text-center bg-black text-white rounded-lg'>Payment</Link>
            </div>
        </div>
    );
}

export default AdminInfluencerPay;
