import { Button, Modal, Form, Input, InputNumber, Switch, Select, notification, message, Descriptions, } from 'antd';
import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import './Room.css';
import { editRoom } from '../../services/roomService';

const { Option } = Select;

export default function EditRoom(pros) {
    const { record, onReLoad } = pros;
    const [showModal, setShowModal] = useState(false);

    const [form] = Form.useForm();
    const [notiApi, contextHolder] = notification.useNotification()

    const HandleShowModal = () => {
        setShowModal(true);
    }

    const handleCancel = () => {
        setShowModal(false);
        form.resetFields();
    }


    const rules = [
        {
            required: true,
            message: 'Bắt buộc nhập!',
        }
    ]

    const HandleSubmit = async (values) => {
        console.log(values);
        const response = await editRoom(record.id, values);
        console.log(response);
        if (response) {
            notiApi.success({
                message: 'Sửa phòng thành công',
                Descriptions: `Sửa phòng ${record.name} thành công`
            });
            onReLoad();
        } else {
            notiApi.error({
                message: 'Sửa phòng thất bại',
                Descriptions: `Sửa phòng ${record.name} thất bại`
            });
        }

    }
    return (
        <>
            <Button icon={<EditOutlined />} type='primary' onClick={HandleShowModal} />

            <Modal open={showModal} onCancel={handleCancel} footer={null} width={'450px'} centered={true}>
                {contextHolder}
                <h2>Tạo phòng</h2>
                <Form onFinish={HandleSubmit} layout='vertical' form={form} initialValues={record}>
                    <Form.Item
                        label='Tên phòng'
                        name='name'
                        rules={rules}
                    >
                        <Input style={{ width: '400px' }} />
                    </Form.Item>
                    <Form.Item
                        label='Số lượng giường'
                        name='quantitybed'
                        rules={rules}
                    >
                        <InputNumber style={{ width: '400px' }} min={1} />
                    </Form.Item>

                    <Form.Item
                        label='Số lượng người'
                        name='quantitypeople'
                        rules={rules}
                    >
                        <InputNumber style={{ width: '400px' }} min={1} />
                    </Form.Item>

                    <Form.Item
                        label='Tiện ích'
                        name='utils'
                    >
                        <Select mode='multiple' allowClear style={{ width: '400px' }}>
                            <Option value="Điều hòa">Điều hòa</Option>
                            <Option value="Quạt hơi nước">Quạt hơi nước</Option>
                            <Option value="Nóng lạnh">Nóng lạnh</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label='Mô tả'
                        name='desc'
                    >
                        <Input.TextArea showCount maxLength={100} style={{ width: '400px' }} />
                    </Form.Item>

                    <div className='option'>
                        <Form.Item
                            label='Trạng thái: '
                            name='status'
                            valuePropName='checked'
                        >
                            <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
                        </Form.Item>

                        <Form.Item
                            label='Loại phòng: '
                            name='typeroom'
                            valuePropName='checked'
                        >
                            <Switch checkedChildren="Phòng vip" unCheckedChildren="Phòng thường" />
                        </Form.Item>
                    </div>

                    <Form.Item >
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
