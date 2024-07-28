import React from 'react';
import { Button, Popconfirm } from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import { delRoom } from '../../services/roomService';

export default function DelRoom(pros) {
    const {record, onReLoad} = pros;

    const handleDelRoom = async () => {
        const response = await delRoom(record.id);
        if(response) {
            alert('Xóa thành công!')
        } else {
            alert("Xóa không thành công")
        };
        onReLoad()
    }
    return (
        <>
            <Popconfirm title="Sure to delete?" onConfirm={handleDelRoom}>
                <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
        </>
    )
}
