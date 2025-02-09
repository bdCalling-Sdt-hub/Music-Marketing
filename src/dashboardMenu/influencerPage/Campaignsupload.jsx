import React, { useState } from 'react';
import { Upload, Button, Modal, Image } from 'antd'; // Import Ant Design components
import { FaFileUpload } from 'react-icons/fa'; // Import file upload icon
import { useNavigate } from 'react-router-dom'; // For navigation on "View Feedback" click
import { IoLinkOutline } from 'react-icons/io5';
import { FaCirclePlay } from 'react-icons/fa6';

const CampaignsUpload = () => {
    const [activeTab, setActiveTab] = useState('upload'); // Default tab is "Upload Drafts"
    const [platformName, setPlatformName] = useState('');
    const [file, setFile] = useState(null);
    const [uploadedDrafts, setUploadedDrafts] = useState([]); // To store uploaded drafts
    const [previewImage, setPreviewImage] = useState(''); // For previewing the uploaded image
    const [previewOpen, setPreviewOpen] = useState(false); // Control image preview modal visibility
    const navigate = useNavigate();

    // Tab switching handler
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // File change handler
    const handleFileChange = ({ fileList }) => {
        setFile(fileList);
    };

    // Handle submit action
    const handleSubmit = () => {
        if (file && platformName) {
            const newUploadedDraft = {
                id: uploadedDrafts.length + 1,
                platform: platformName,
                file,
                imageUrl: URL.createObjectURL(file[0].originFileObj), // For displaying image preview
            };

            setUploadedDrafts([...uploadedDrafts, newUploadedDraft]);
            setPlatformName('');
            setFile(null); // Reset the file input after submitting
        }
    };

    // Handle "View Feedback" click
    const handleViewFeedback = () => {
        navigate('/influencer/feedbacks/sdf'); // You can navigate to the feedback page (you need to define that route in your app)
    };

    // Handle preview of uploaded image
    const handlePreview = (file) => {
        setPreviewImage(file.url || file.thumbUrl);
        setPreviewOpen(true);
    };

    return (
        <div className="p-5">
            {/* Tab Navigation */}
            <div className="flex border-b-2 mb-5">
                <button
                    className={`py-2 px-4 font-semibold ${activeTab === 'upload' ? 'border-b-4 border-[#1b1b1b] text-[#1b1b1b]' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('upload')}
                >
                    Upload Drafts
                </button>
                <button
                    className={`py-2 px-4 font-semibold ${activeTab === 'uploaded' ? 'border-b-4 border-[#1b1b1b] text-[#1b1b1b]' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('uploaded')}
                >
                    Uploaded Drafts
                </button>
                <button
                    className={`py-2 px-4 font-semibold ${activeTab === 'approved' ? 'border-b-4 border-[#1b1b1b] text-[#1b1b1b]' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('approved')}
                >
                    Approved Drafts
                </button>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'upload' && (
                    <div className='w-96'>
                        {/* Upload Drafts Tab Content */}
                        <h2 className="text-3xl font-semibold ">Platform</h2>

                        <input className='w-full p-2 rounded-md border border-gray-400 my-5' type="text" placeholder='Input Platform Name' />


                        {/* File Upload Section */}
                        <div className='border-2 border-dashed rounded-md p-20 border-gray-300 w-full text-center'>
                            <div className="mb-5 w-full  flex items-center justify-center flex-col">
                                <label className="block mb-2">Click to Upload or drag and drop</label>
                                <Upload
                                    listType="picture-card"
                                    fileList={file}
                                    onPreview={handlePreview}
                                    onChange={handleFileChange}
                                    beforeUpload={() => false} // Prevent auto-upload
                                >
                                    <div className="text-center p-5 flex items-center justify-center flex-col b">
                                        <FaFileUpload className="text-xl mb-2" />
                                        <p>Click to upload</p>
                                    </div>
                                </Upload>
                                <p className="text-sm text-gray-500 mt-3">Max. File size: 25 MB</p>
                                <p>{file && file.length > 0 ? file[0].name : 'No file selected'}</p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            className="bg-[#344331] w-full text-white py-3 mt-5 px-4 rounded"
                            onClick={handleSubmit}
                            disabled={!platformName || !file || file.length === 0}
                        >
                            Submit
                        </button>
                    </div>
                )}

                {activeTab === 'uploaded' && (
                    <div className='grid grid-cols-5 gap-10'>
                        {/* Uploaded Drafts Tab Content */}

                        <div className="mb-5 ">
                            <h2 className="text-3xl font-semibold ">Platform</h2>
                            <h3 className='font-semibold my-3'>TikTok</h3>
                            <div className='border '>
                                <img className='w-full max-h-96' src="/influencer/Home/campaignIcons/uploadedFiles.png" alt="" />
                            </div>
                            <button
                                className="mt-3 bg-[#344331] w-full text-white py-3  rounded"
                                onClick={handleViewFeedback}
                            >
                                View Feedback
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'approved' && (
                    <div className='grid grid-cols-5 gap-10'>
                        {/* Uploaded Drafts Tab Content */}

                        <div className="mb-5 ">
                            <h2 className="text-3xl font-semibold ">Platform</h2>
                            <h3 className='font-semibold my-3'>TikTok</h3>
                            <div className='border '>
                                <img className='w-full max-h-96' src="/influencer/Home/campaignIcons/uploadedFiles.png" alt="" />
                            </div>
                            <label className='flex items-center justify-between gap-3 p-2 border border-[#eee] rounded-md my-5' htmlFor="">
                                <span>
                                    <IoLinkOutline className='text-2xl font-semibold' />
                                </span>
                                <span>
                                    <input className='w-full focus:outline-none right-0' type="text" placeholder='Upload your post link' />
                                </span>
                                <span>
                                    <FaCirclePlay className='text-2xl font-semibold text-[#344331] cursor-pointer' />
                                </span>
                            </label>
                        </div>
                    </div>
                )}
            </div>

            {/* Image Preview Modal */}
            <Modal
                visible={previewOpen}
                footer={null}
                onCancel={() => setPreviewOpen(false)}
            >
                <img alt="Uploaded Preview" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    );
};

export default CampaignsUpload;
