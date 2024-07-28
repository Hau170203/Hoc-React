import React from 'react'
import { Form, Input, Button, InputNumber, Select, Switch, message } from 'antd'
import { createRoom } from '../../services/roomService';
const {Option} = Select;

export default function CreateRoom() {
    const  [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage()
    const rules = [
        {
            required: true,
            message: 'Bắt buộc nhập!',
        }
    ]

    const HandleSubmit = async (values) => {
        // console.log(values);
        const response = await createRoom(values);
        // console.log(response);
        if(response) {
            messageApi.open({
                type: 'success',
                content: 'Tạo phòng thành công'
            });
            form.resetFields();
        } else {
            messageApi.open({
                type: 'error',
                content: 'Tạo phòng không thành công'
            });
        }

    }

    return (
        <>
            {contextHolder}
            <h2>Tạo phòng</h2>
            <Form onFinish={HandleSubmit} layout='vertical' form={form}>
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
                    <Input.TextArea showCount maxLength={100} style={{ width: '400px' }}/>
                </Form.Item>

                <Form.Item
                    label='Trạng thái: '
                    name='status'
                    valuePropName='checked'
                >
                    <Switch checkedChildren="Còn phòng"  unCheckedChildren="Hết phòng" />
                </Form.Item>

                <Form.Item
                    label='Loại phòng: '
                    name='typeroom'
                    valuePropName='checked'
                >
                <Switch checkedChildren="Phòng vip" unCheckedChildren="Phòng thường"  />
                </Form.Item>

                <Form.Item >
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}
