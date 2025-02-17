import React, { useState } from "react";
import { Form, Input, Button, Upload, DatePicker, Select, Checkbox, Row, Col } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { FaAngleLeft, FaMusic } from "react-icons/fa6";
import { RiSoundModuleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FiFolderPlus } from "react-icons/fi";
import { BiSolidCloudUpload } from "react-icons/bi";

const { TextArea } = Input;
const { Option } = Select;

const ClientCampaignsCreate = () => {
    const [tikTokUrl, setTikTokUrl] = useState("");
    const [soundUrl, setSoundUrl] = useState("");

    const handleTikTokUpload = () => {
        console.log("Uploading TikTok URL:", tikTokUrl);
        // Add your upload logic here
    };

    const handleSoundUpload = () => {
        console.log("Uploading Sound URL:", soundUrl);
        // Add your upload logic here
    };



    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Form Values:", values);
    };




    return (
        <div className="p-5 bg-white ">
            <Link to={'/client/campaigns'} className="text-xl font-semibold mb-5 flex items-center gap-2"><FaAngleLeft /> Create New Campaign</Link>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    budget: "1,200",
                    sendEmail: true,
                    platforms: ["Youtube", "Instagram"],
                }}
                className="grid grid-cols-2 gap-5"
            >
                <div>
                    {/* Campaign Name */}
                    <Form.Item label="Campaign Name" name="campaignName" rules={[{ required: true, message: "Please enter a campaign name" }]}>
                        <Input className="py-2" placeholder="Enter Campaign Name" />
                    </Form.Item>

                    {/* Event Description */}
                    <Form.Item label="Event Description" name="description" rules={[{ required: true, message: "Please enter a description" }]}>
                        <TextArea rows={3} placeholder="Description" />
                    </Form.Item>

                    {/* Budget */}
                    <Form.Item label="Budget" name="budget">
                        <Input className="py-2" prefix="$" />
                    </Form.Item>

                    <Row gutter={16}>
                        {/* Start Date */}
                        <Col span={12}>
                            <Form.Item label="Target Starting Date" name="startDate" rules={[{ required: true, message: "Select a start date" }]}>
                                <DatePicker className="w-full py-2" />
                            </Form.Item>
                        </Col>

                        {/* End Date */}
                        <Col span={12}>
                            <Form.Item label="Target Ending Date" name="endDate" rules={[{ required: true, message: "Select an end date" }]}>
                                <DatePicker className="w-full py-2" />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Assign Influencers */}
                    <Form.Item label="Assign Influencers" name="influencers">
                        <Select className="py-2" mode="multiple" placeholder="Search influencers">
                            <Option value="influencer1">Influencer 1</Option>
                            <Option value="influencer2">Influencer 2</Option>
                            <Option value="influencer3">Influencer 3</Option>
                        </Select>
                    </Form.Item>

                    {/* Social Media Platform Selection */}
                    <Form.Item label="Add Influencers by Their Social Group">
                        <Checkbox.Group>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <span className="block mt-3"><Checkbox value="Youtube">Youtube</Checkbox></span>
                                    <span className="block mt-3"><Checkbox value="Instagram">Instagram</Checkbox></span>
                                </div>
                                <div>
                                    <span className="block mt-3"><Checkbox value="TikTok">TikTok</Checkbox></span>
                                    <span className="block mt-3"><Checkbox value="Facebook">Facebook</Checkbox></span>
                                </div>
                            </div>
                        </Checkbox.Group>
                    </Form.Item>
                </div>

                <div>
                    <div>
                        {/* Upload Album Image */}
                        <div >
                            <Form.Item label="Upload Album Image" name="albumImage">
                                <Upload.Dragger name="file" multiple={false} accept="image/*">
                                    <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                                    <p>Click or drag an image to upload</p>
                                </Upload.Dragger>
                            </Form.Item>
                        </div>

                        {/* Upload Song Media */}
                        <div >
                            <Form.Item label="Upload The Media of Song" name="songMedia">
                                <Upload className="py-2" name="file" multiple={false} accept="audio/*">
                                    <Button icon={<UploadOutlined />}>Upload Music File</Button>
                                </Upload>
                            </Form.Item>
                        </div>
                    </div>



                    <Form layout="vertical">
                        {/* TikTok Sound Link */}
                        <Form.Item className="relative" name="tikTokLink">
                            {
                                tikTokUrl &&
                                <div className="flex items-center gap-3 my-3">
                                    <BiSolidCloudUpload className="text-3xl text-gray-400" />
                                    <div>
                                        <h2 className="font-semibold">TikTok Sound Link</h2>
                                        <p className="text-gray-500">{tikTokUrl}</p>
                                    </div>
                                </div>
                            }
                            <div className="relative">
                                <Input
                                    className="py-2 pr-10"
                                    placeholder="Paste the TikTok music URL"
                                    value={tikTokUrl}
                                    onChange={(e) => setTikTokUrl(e.target.value)}
                                    prefix={<TbWorld className="text-gray-500 text-lg mr-2" />}
                                />
                            </div>
                        </Form.Item>

                        {/* General Sound Link */}
                        <Form.Item className="relative" name="soundLink">
                            {
                                soundUrl &&
                                <div className="flex items-center gap-3 my-3">
                                    <BiSolidCloudUpload className="text-3xl text-gray-400" />
                                    <div>
                                        <h2 className="font-semibold">Upload The Media of Song</h2>
                                        <p className="text-gray-500">{soundUrl}</p>
                                    </div>
                                </div>
                            }
                            <div className="relative">
                                <Input
                                    className="py-2 pr-10"
                                    placeholder="Paste the music URL"
                                    value={soundUrl}
                                    onChange={(e) => setSoundUrl(e.target.value)}
                                    prefix={<FiFolderPlus className="text-gray-500 text-lg mr-2" />}
                                />
                            </div>
                        </Form.Item>
                    </Form>

                    {/* Send Email Notification Checkbox */}
                    {/* <Form.Item name="sendEmail" valuePropName="checked">
                        <Checkbox>Send Email Notification</Checkbox>
                    </Form.Item> */}

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="px-10 h-12 bg-[#344331] font-semibold">
                                Create Campaign
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ClientCampaignsCreate;
