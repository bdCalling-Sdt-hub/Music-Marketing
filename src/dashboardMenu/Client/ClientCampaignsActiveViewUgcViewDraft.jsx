


import React, { useState } from 'react';
import { Modal } from 'antd';
import Slider from "react-slick";
import { FaRegCirclePlay } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick Slider Settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Ensure at least 3 items are visible
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024, // For tablets & small desktops
            settings: {
                slidesToShow: 2, // Show 2 items on medium screens
            }
        },
        {
            breakpoint: 768, // For mobile screens
            settings: {
                slidesToShow: 1, // Show 1 item on small screens
            }
        }
    ]
};
// Mock Media Data
const mediaData = [
    { platform: "TikTok", image: "/influencer/Home/Rectangle-3.png" },
    { platform: "YouTube", image: "/influencer/Home/Rectangle-3.png" },
    { platform: "Instagram", image: "/influencer/Home/Rectangle-3.png" },
];

const ClientCampaignsActiveViewUgcViewDraft = () => {
    const [isMediaModalVisible, setIsMediaModalVisible] = useState(false);
    const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSendFeedback = () => {
        console.log("Feedback submitted:", feedback);
        setIsFeedbackModalVisible(false);
        setFeedback(""); // Reset feedback field after submission
    };

    return (
        <div>
            {/* Influencer Info */}
            <div className='flex gap-5 items-center'>
                <img className='w-32 h-32 rounded-full' src="/influencer/Home/Rectangle-2.png" alt="Influencer" />
                <div>
                    <h2 className='text-2xl font-semibold'>Maria Rodrigez</h2>
                    <h2>Influencer</h2>
                    <div className='flex gap-3 mt-2'>
                        <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/Instagram.png" alt="Instagram" />
                        <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/TikTok.png" alt="TikTok" />
                        <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/X.png" alt="X" />
                        <img className='w-6' src="/influencer/Home/campaignIcons/socialMedia/YouTube.png" alt="YouTube" />
                    </div>
                </div>
            </div>

            {/* Campaign Media */}
            <div className='my-10 w-52'>
                <h2 className='text-2xl font-semibold'>Platform</h2>
                <h3 className='my-2'>TikTok</h3>
                <div>
                    <div
                        className='w-full min-h-80 flex items-center justify-center h-full bg-[url("/influencer/Home/Rectangle-3.png")] bg-cover bg-no-repeat bg-center cursor-pointer'
                        onClick={() => setIsMediaModalVisible(true)}
                    >
                        <FaRegCirclePlay className='text-white text-4xl' />
                    </div>
                </div>
                <div className='space-y-3 my-5'>
                    <button className='block py-3 w-full bg-[#344331] text-white rounded-lg' onClick={() => setIsFeedbackModalVisible(true)}>
                        Send Feedback
                    </button>
                    <button className='block py-3 w-full bg-[#2e0000] text-white rounded-lg'>Accept</button>
                </div>
            </div>

            {/* Media Modal with Slider */}
            <Modal visible={isMediaModalVisible} footer={null} onCancel={() => setIsMediaModalVisible(false)} width={400}>
                <h2 className='text-xl font-semibold text-center mb-3'>Platform</h2>
                <h3 className=' mb-3'>TikTok</h3>
                <div className='relative'>
                    <img className='min-h-[60vh] w-full' src="/influencer/Home/Rectangle-3.png" alt="" />
                    <FaRegCirclePlay className="absolute inset-0 m-auto text-white text-5xl cursor-pointer" />
                </div>

                <div className="overflow-hidden"> {/* Prevents unnecessary overflow */}
                    <Slider {...sliderSettings}>
                        {mediaData.map((item, index) => (
                            <div key={index} className="mr-4"> {/* ✅ Margin-right applied */}
                                <div className="relative  p-3 ">
                                    <h2 className="mb-2">{item.platform}</h2>
                                    <div className='relative'>
                                        <img src={item.image} alt={item.platform} className="w-full h-auto rounded-lg" />
                                        <FaRegCirclePlay className="absolute inset-0 m-auto text-white text-3xl cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </Modal>

            {/* Feedback Modal */}
            <Modal visible={isFeedbackModalVisible} footer={null} onCancel={() => setIsFeedbackModalVisible(false)} width={500}>
                <h2 className='text-xl font-semibold text-center mb-2'>Send Feedback</h2>
                <p className='text-center text-gray-600 mb-4'>Got suggestions? Send feedbacks for review.</p>
                <textarea
                    className="w-full p-3 border rounded-md h-32"
                    placeholder="Write your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-4">
                    <button className='py-2 px-5 bg-[#344331] text-white rounded-lg' onClick={handleSendFeedback}>
                        Send to Admin
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default ClientCampaignsActiveViewUgcViewDraft;
