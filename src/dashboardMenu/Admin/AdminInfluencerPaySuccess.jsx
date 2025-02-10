import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AdminInfluencerPaySuccess = () => {
    return (
        <div className='h-[70vh] flex items-center justify-center'>
            <div className='max-w-[600px] w-full mx-auto text-center'>
                <div className='flex items-center justify-center'>
                    <FaCircleCheck className='text-8xl font-semibold ' />
                </div>
                <h2 className=' my-5 text-center text-3xl font-semibold'>Payment Successful</h2>
                <p className='my-5 text-gray-400'>Name: Maria</p>
                <p className='my-5 text-gray-400'>Account No: 0020202034</p>
                <h2 className='my-5 gap-5 text-3xl font-semibold text-green-600'>Your payment has been confirmed</h2>
                <div className='flex items-center justify-center'>
                    <Link to={`/admin/influencers`} className='py-3 my-5 w-48 block text-center border-black border rounded-lg'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminInfluencerPaySuccess;
