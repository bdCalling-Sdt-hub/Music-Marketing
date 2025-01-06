import React from 'react';

const InfluncerHome = () => {
    return (
        <div  className='flex items-center gap-5 flex-wrap'>
            <div className='flex w-80 items-center gap-5 justify-between bg-primary text-white p-5 rounded-lg'>
                <div>
                    <h4 className='text-xl font-semibold text-gray-200 mb-3'>Total Engagement</h4>
                    <h2 className='text-3xl font-semibold '>40,689</h2>
                </div>
                <div>
                    <img src="/influencer/Home/Icon.png" alt="" />
                </div>
            </div>
            <div className='flex w-80 items-center gap-5 justify-between bg-primary text-white p-5 rounded-lg'>
                <div>
                    <h4 className='text-xl font-semibold text-gray-200 mb-3'>Total Campaign</h4>
                    <h2 className='text-3xl font-semibold '>10293</h2>
                </div>
                <div>
                    <img src="/influencer/Home/Icon1.png" alt="" />
                </div>
            </div>
            <div className='flex w-80 items-center gap-5 justify-between bg-primary text-white p-5 rounded-lg'>
                <div>
                    <h4 className='text-xl font-semibold text-gray-200 mb-3'>Total Income</h4>
                    <h2 className='text-3xl font-semibold '>$89,000</h2>
                </div>
                <div>
                    <img src="/influencer/Home/Icon2.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default InfluncerHome;
