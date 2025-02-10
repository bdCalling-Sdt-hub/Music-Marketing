import React from 'react';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';



const ClientCampaignsActiveViewUgc = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-semibold my-10'>Joined Influencers Drafts</h1>

                <div className='grid grid-cols-4 gap-5'>
                    {
                        [...Array(8)].map((_, index) => (
                            <div className='flex gap-3 border border-gray-600 rounded-lg p-2'>
                                {/* <img className='w-24 h-full' src="/influencer/Home/Rectangle-3.png" alt="" /> */}
                                <div className='w-28 flex items-center justify-center h-full bg-[url("/influencer/Home/Rectangle-3.png")] bg-cover bg-no-repeat bg-center'>
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
                                                <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="" />
                                                <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/X.png" alt="" />
                                                <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    
                                    <div className='block'>
                                        <Link to={`/client/campaigns/active/view-ugc/${11}`} className='border w-full border-gray-600 rounded-lg py-2 px-5 mt-5 blcok'>View Draft</Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <button className='bg-[#344331] text-white rounded-lg w-full py-2 px-5 mt-5'>Accept</button>
                                        <button className='border border-gray-600 rounded-lg w-full py-2 px-5 mt-5'>Decline</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default ClientCampaignsActiveViewUgc;
