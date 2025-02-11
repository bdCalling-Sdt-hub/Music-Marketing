import React, { useState } from 'react';
import { FaChevronLeft, FaRegCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'antd';

const AdminCampaignsActiveViewUgcViewDraftViewFeedback = () => {
    const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);
    const [feedback, setFeedback] = useState('');

    // Open Feedback Modal
    const openFeedbackModal = () => {
        setIsFeedbackModalVisible(true);
    };

    // Close Feedback Modal
    const closeFeedbackModal = () => {
        setIsFeedbackModalVisible(false);
        setFeedback(''); // Reset feedback when closing the modal
    };

    // Handle send feedback action
    const handleSendFeedback = () => {
        if (feedback.trim() === '') {
            alert('Please provide feedback before submitting.');
            return;
        }
        // Logic to send feedback to the influencer
        console.log('Feedback sent:', feedback);
        closeFeedbackModal(); // Close the modal after sending feedback
    };

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
                                    <div className='flex gap-2'>
                                        <button className='bg-[#344331] py-3 rounded-md px-4'>Send to Influencer</button>
                                        <button onClick={openFeedbackModal} className='border border-[#ffffff] py-3 rounded-md px-4'>Edit Feedback</button>
                                    </div>
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

            {/* Feedback Modal */}
            <Modal
                visible={isFeedbackModalVisible}
                onCancel={closeFeedbackModal}
                footer={null}
                width={700}
                closable={true}
                className=''
            >
                <div className=''>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 text-center">Edit Clients Feedback</h2>
                        <p className='my-2'><strong>Influencer:</strong> Maria Rodriguez</p>
                        <p className='my-2'><strong>Campaign Name:</strong> Holiday Music Festival</p>
                        <p className='my-2'><strong>Platform:</strong> TikTok</p>
                        <p className='my-2'>Got suggestions? Improve the feedbacks.</p>
                    </div>
                    <div className="my-4">
                        {/* <h3 className="text-lg font-semibold">Write Your Feedback:</h3> */}
                        <textarea
                            className="w-full p-3 border border-[#ccc] rounded-md mt-3"
                            placeholder="Write your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            rows={5}
                        />
                    </div>
                    <div className="flex justify-end mt-5">
                        <button
                            className="bg-[#344331] text-white px-6 py-3 rounded-lg"
                            onClick={handleSendFeedback}
                        >
                            Send to Influencer
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminCampaignsActiveViewUgcViewDraftViewFeedback;
