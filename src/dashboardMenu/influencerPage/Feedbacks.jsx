import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Feedbacks = () => {
    return (
        <div>
            <Link className='flex items-center gap-2 text-3xl font-semibold' to={'/influencer/home'}>
                <FaChevronLeft /> Feedbacks
            </Link>
            <div className='mt-10 grid grid-cols-3 gap-5'>
                <div className='bg-primary rounded-lg p-5'>
                    <div className=' flex gap-5 text-white'>
                        <img className='w-36' src="/influencer/Home/Rectangle-2.png" alt="" />
                        <div className=''>
                            <h2 className='text-xl font-semibold my-1'>Instagram</h2>
                            <h2 className='text-xl font-semibold my-1'>Holiday Music Festival</h2>
                            <p>Trendyx</p>
                            <p>Date: 11/12/25</p>
                        </div>
                    </div>
                    <p className='text-white py-5'>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link to={'/influencer/campaignsupload/sdfkj'} className='bg-white py-3 px-10 rounded-lg font-semibold'>Upload New File</Link>
                </div>
                <div className='bg-primary rounded-lg p-5'>
                    <div className=' flex gap-5 text-white'>
                        <img className='w-36' src="/influencer/Home/Rectangle-2.png" alt="" />
                        <div className=''>
                            <h2 className='text-xl font-semibold my-1'>Instagram</h2>
                            <h2 className='text-xl font-semibold my-1'>Holiday Music Festival</h2>
                            <p>Trendyx</p>
                            <p>Date: 11/12/25</p>
                        </div>
                    </div>
                    <p className='text-white py-5'>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link to={'/influencer/campaignsupload/sdfkj'} className='bg-white py-3 px-10 rounded-lg font-semibold'>Upload New File</Link>
                </div>
            </div>
        </div>
    );
}

export default Feedbacks;
