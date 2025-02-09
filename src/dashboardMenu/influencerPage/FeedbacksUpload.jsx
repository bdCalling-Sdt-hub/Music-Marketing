import { Button, Upload } from 'antd';
import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const FeedbacksUpload = () => {


    const handleFileChange = ({ file, fileList }) => {
        // Handle file change event
        if (file.status === 'done') {
            message.success(`${file.name} file uploaded successfully`);
        } else if (file.status === 'error') {
            message.error(`${file.name} file upload failed.`);
        }
    };




    return (
        <div>
            <Link className='flex items-center gap-2 text-3xl font-semibold' to={'/influencer/feedbacks/sdf'}>
                <FaChevronLeft /> Upload New File for Facebook
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
                    <div className="w-full border rounded-md border-white min-h-60 flex items-center justify-center flex-col">
                        <div className='my-5 flex flex-col items-center'>
                            <Upload
                                action="/upload" // Replace with your upload endpoint
                                onChange={handleFileChange}
                                className='bg-transparent border-none '
                                showUploadList={false} // Optionally, to hide the uploaded file list
                            >
                                <button
                                    // icon={uploadButton}
                                    className="w-full  "
                                >
                                    <div className="flex items-center justify-center bg-none flex-col">
                                        <FaCloudUploadAlt className="text-blue-500 text-2xl mr-2" />
                                        <span className="text-blue-500 font-semibold">Click to Upload or drag and drop</span>
                                        <p className="text-xs text-gray-500">(Max. File size: 25 MB)</p>
                                    </div>
                                </button>
                            </Upload>
                        </div>
                    </div>
                    <Link to={'/influencer/campaignsupload/sdfkj'} className='bg-[#344331] mt-5 text-white w-full block text-center py-3 px-10 rounded-lg font-semibold'>Submit</Link>
                </div>
            </div>
        </div>
    );
}

export default FeedbacksUpload;
