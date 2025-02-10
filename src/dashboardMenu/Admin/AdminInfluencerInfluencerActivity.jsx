import React from 'react';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AdminInfluencerInfluencerActivity = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold my-10'>Influencer Activity</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    [...Array(2)].map((_, index) => (
                        <div className='flex gap-3 border border-gray-600 rounded-lg p-2'>
                            {/* <img className='w-24 h-full' src="/influencer/Home/Rectangle-3.png" alt="" /> */}
                            <div className='w-44 flex items-center justify-center h-full bg-[url("/influencer/Home/Rectangle-3.png")] bg-cover bg-no-repeat bg-center'>
                                <FaRegCirclePlay className='text-white text-4xl' />
                            </div>
                            <div>
                                <div className='flex gap-5'>
                                    <img className='w-20 h-20 rounded-full' src="/influencer/Home/Rectangle-2.png" alt="" />
                                    <div>
                                        <h2 className=' font-semibold'>Maria Rodrigez</h2>
                                        <h2>Influencer</h2>
                                        <div className='flex gap-3 mt-2'>
                                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/Instagram.png" alt="" />
                                            {/* <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="" />
                                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/X.png" alt="" />
                                            <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h3 className='text-xl '>Event Name</h3>
                                    <h2 className='text-2xl font-semibold'>Holiday Music Event</h2>
                                    <Link to={`/admin/influencers/single-influencer-activity/${index}`} className='border block text-center border-gray-600 rounded-lg w-full py-2 px-5 mt-5'>View Post Analytics</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AdminInfluencerInfluencerActivity;
