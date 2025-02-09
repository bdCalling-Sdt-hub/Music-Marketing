import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa6';

const AdminClientsRemove = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        // Add your remove logic here, like calling an API to remove the client
    };

    return (
        <div className="p-5">
            <Link to="/admin/clients" className="flex items-center gap-2 text-2xl font-semibold mb-5">
                <FaAngleLeft className='text-2xl' /> Remove Client
            </Link>

            {/* Form to remove client */}
            <Form
                name="remove_client"
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    // Pre-fill with mock data
                    fullName: 'Asad',
                    email: 'asad@gmail.com',
                }}
                className='w-1/3 mx-auto p-5 bg-[#fff8ea] rounded-lg'
            >
                <h2 className="font-semibold mb-5">Remove Client</h2>
                {/* Full Name Field */}
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input the client\'s full name!' }]}
                >
                    <Input className='py-3' placeholder="Full Name" />
                </Form.Item>

                {/* Email Field */}
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[{ required: true, message: 'Please input the client\'s email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
                >
                    <Input className='py-3' placeholder="E-mail" />
                </Form.Item>

                {/* Password Field */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input the client\'s password!' }]}
                >
                    <Input.Password className='py-3' placeholder="Password" />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full h-12 bg-[#930707]">
                        Remove
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminClientsRemove;
