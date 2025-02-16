
import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaImage } from 'react-icons/fa';
import { LuImagePlus } from 'react-icons/lu';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { IoClose, IoSettingsOutline } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa6';

const ClientInfluencerProfileDetailsEdit = () => {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
    const [passwordData, setPasswordData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });

    // Social Links State
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');

    const socialIcons = {
        facebook: <FaFacebook />,
        tiktok: <FaTiktok />,
        twitter: <FaTwitter />,
        instagram: <FaInstagram />
    };

    const data = {
        data: {
            attributes: {
                fullName: "Enrique Smith",
                email: "enrique.smith@example.com",
            }
        }
    };

    const handleBack = () => {
        navigate("/influencer/profile");
    };

    const handleUploadChange = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            setImageUrl(info.file.response.url);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleUpdateProfile = (values) => {
        console.log('Updated Profile:', values);
        message.success('Profile updated successfully!');
    };



    // Add new social link
    const addLink = () => {
        if (!selectedPlatform || !newLink.trim()) {
            message.error("Please select a platform and enter a valid URL.");
            return;
        }
        setLinks([...links, { platform: selectedPlatform, url: newLink }]);
        setNewLink("");
        setSelectedPlatform("");
    };

    // Remove a social link
    const removeLink = (index) => {
        setLinks(links.filter((_, i) => i !== index));
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm(); // Ant Design Form instance

    // Show Modal
    const handlePasswordChangeShowModal = () => {
        setIsModalVisible(true);
    };

    // Hide Modal
    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields(); // Reset fields when closing
    };

    // Handle Password Change Submission
    const handlePasswordChangeSubmit = (values) => {
        if (values.newPassword !== values.confirmPassword) {
            message.error("New password and confirm password don't match!");
        } else {
            message.success("Password changed successfully!");
            setIsModalVisible(false);
            form.resetFields();
        }
    };

    return (
        <div className='mb-10'>
            <Form layout="vertical" autoComplete="off" onFinish={handleUpdateProfile}>
                <div className='flex items-center justify-between'>
                    <div onClick={handleBack} className="flex items-center cursor-pointer ml-6 mt-10 mb-16">
                        <MdOutlineKeyboardArrowLeft size={30} />
                        <h1 className="text-xl font-medium ml-2">Edit Profile</h1>
                    </div>
                    <Button
                        htmlType="submit"
                        className="mt-12 h-14 px-10 !bg-[#0f0f0f] hover:!text-white text-[#fff] rounded-lg text-lg font-medium"
                    >
                        Update Profile
                    </Button>
                </div>

                <div className="mx-6 p-9 rounded-xl ">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex flex-col items-center w-full lg:w-1/3 border-dotted border">
                            <div className="relative w-56 h-56 rounded-full flex justify-center items-center mt-5 bg-gray-50 border">
                                <Upload name="avatar" showUploadList={false} onChange={handleUploadChange}>
                                    <img
                                        className="w-44 h-44 rounded-full"
                                        src={imageUrl || "https://via.placeholder.com/150"}
                                        alt="Profile"
                                    />
                                    <Button
                                        className="border-none text-md text-blue-500 absolute bottom-6 flex items-center"
                                        icon={<LuImagePlus size={20} className="mr-2" />}
                                    >
                                        Change Picture
                                    </Button>
                                </Upload>
                            </div>

                            <div className="text-center mt-6">
                                <p className="text-lg">{"admin"}</p>
                                <h1 className="text-2xl font-medium">
                                    {data?.data?.attributes?.fullName}
                                </h1>
                            </div>
                        </div>

                        <div className="flex-1 w-full lg:w-2/3">
                            <div className="flex flex-col gap-6">
                                <Form.Item
                                    label={<span className="text-lg font-medium">Name</span>}
                                    name="fullName"
                                    initialValue={data?.data?.attributes?.fullName}
                                    rules={[{ required: true, message: "Please input your name!" }]}
                                >
                                    <Input placeholder="Full Name" className="p-4 rounded-lg border-gray-300" />
                                </Form.Item>

                                <Form.Item label={<span className="text-lg font-medium">Email</span>} name="email">
                                    <Input
                                        placeholder="Email"
                                        value={data?.data?.attributes?.email}
                                        readOnly
                                        className="p-4 rounded-lg border-gray-300 bg-gray-100"
                                    />
                                </Form.Item>

                                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-lg font-medium mb-2 block">Phone Number</label>
                                        <div className='w-full'>
                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                international
                                                country="us"  // ✅ Correct way to set the default country
                                                className="rounded-lg block w-full border-gray-300"
                                            />
                                        </div>

                                    </div>

                                    {/* Social Links Section */}
                                    <div className="">
                                        <h2 className="text-lg font-medium mb-2">Add Social Links</h2>
                                        <select
                                            value={selectedPlatform}
                                            onChange={(e) => setSelectedPlatform(e.target.value)}
                                            className="w-full p-2 border rounded mb-3"
                                        >
                                            <option value="">Select Social Platform</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="tiktok">TikTok</option>
                                            <option value="twitter">Twitter</option>
                                            <option value="instagram">Instagram</option>
                                        </select>

                                        <div className="space-y-2">
                                            {links.map((link, index) => (
                                                <div key={index} className="flex items-center border rounded overflow-hidden p-2">
                                                    <span className="p-2 text-lg">{socialIcons[link.platform]}</span>
                                                    <input type="text" className="w-full p-2 border-l" value={link.url} readOnly />
                                                    <button onClick={() => removeLink(index)} className="p-2 text-red-600">
                                                        <IoClose size={20} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center border rounded overflow-hidden mt-3">
                                            <input type="text" value={newLink} onChange={(e) => setNewLink(e.target.value)}
                                                className="w-full p-2 outline-none" placeholder="Enter URL" />
                                            <button onClick={addLink} className="p-2 bg-blue-500 text-white">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
            <div className='justify-end flex items-center'>
                <Button
                    className="border-none text-md bg-primary hover:bg-primary h-12 text-white justify-end flex items-center"
                    onClick={handlePasswordChangeShowModal}
                    icon={<IoSettingsOutline size={20} className="mr-2" />}
                >
                    Change Passowrd
                </Button>
            </div>
            <div>
                {/* modal for password change with old and new password and confirm password */}
                <Modal
                    title="Change Password"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form form={form} onFinish={handlePasswordChangeSubmit} layout="vertical">
                        <Form.Item
                            label={<span className="">Old Password</span>}
                            name="oldPassword"
                            rules={[{ required: true, message: "Please input your old password!" }]}
                            className="w-full"
                        >
                            <Input.Password placeholder='Old Password' className="w-full py-3 rounded-lg border-gray-300" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="">New Password</span>}
                            name="newPassword"
                            rules={[{ required: true, message: "Please input your new password!" }]}
                            className="w-full"
                        >
                            <Input.Password placeholder='New Password' className="w-full py-3 rounded-lg border-gray-300" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="">Confirm Password</span>}
                            name="confirmPassword"
                            rules={[{ required: true, message: "Please confirm your password!" }]}
                            className="w-full"
                        >
                            <Input.Password placeholder='Confirm Password' className="w-full py-3 rounded-lg border-gray-300" />
                        </Form.Item>

                        <Form.Item className="w-full">
                            <Button className="w-full bg-primary text-white h-12 hover:bg-primary" type="primary" htmlType="submit">
                                Change Password
                            </Button>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        </div>
    );
};

export default ClientInfluencerProfileDetailsEdit;
