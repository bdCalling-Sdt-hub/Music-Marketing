import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AdminCampaignsCompletedViewUgcViewDraftViewFeedback = () => {
    return (
        <div>
            <Link className='flex items-center gap-2 text-3xl font-semibold' to={`/admin/campaigns/completed/view-ugc`}>
                <FaChevronLeft /> Feedbacks
            </Link>

            <div className='grid grid-cols-3 gap-5 mt-10'>
                {
                    [...Array(8)].map((_, idx) => (
                        <div key={idx} className='bg-black p-5 rounded-lg text-white'>
                            <div className='flex gap-5'>
                                <div className='relative'>
                                    <img className='w-32 h-full' src="/influencer/Home/Rectangle-3.png" alt="" />
                                    <FaRegCirclePlay className="absolute inset-0 m-auto text-white text-3xl cursor-pointer" />
                                </div>
                                <div>
                                    <h2 className='my-2 text-2xl font-semibold'>Platform</h2>
                                    <p className='my-2'>TikTok</p>
                                    <h2 className='my-2 text-2xl font-semibold'>Campaign Name</h2>
                                    <p className='my-2'>Holiday Music Festival</p>
                                    <p className='my-2'>Date: 11/12/25</p>
                                    <button className='my-2 block px-10 py-3 w-full bg-[#ff8225] rounded-lg'>
                                        Waiting for Admins Approval
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm mt-5'>
                                    Feedback: <br />
                                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default AdminCampaignsCompletedViewUgcViewDraftViewFeedback;
