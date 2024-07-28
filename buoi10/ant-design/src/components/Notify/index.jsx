import { Badge, Button, Dropdown } from 'antd';
import { BellOutlined, MessageOutlined } from '@ant-design/icons'
import React from 'react'
import './Notify.css';

export default function Notify() {
    const items = [
        {
            label:
                <div className='notify__item'>
                    <div className="notify__item--icon">
                        <MessageOutlined />
                    </div>
                    <div className="notify__item--content">
                        <div className='notify__item--title'>
                            Item 1
                        </div>
                        <div className='notify__item--time'>
                            12 phút trước
                        </div>
                    </div>
                </div>,
            key: '1',
        },
        {
            label: 'Item 2',
            key: '2',
        },
        {
            label: 'Item 3',
            key: '3',
        },
        {
            label: 'Item 4',
            key: '4',
        },
        {
            label: 'Item 5',
            key: '5',
        },
        {
            label: 'Item 6',
            key: '6',
        },
    ];
    return (
        <>
            <Dropdown menu={{ items, }} trigger={['click']} dropdownRender={(menu) => (
                <div className='notify'>
                    <div className='notify__header'>
                        <div className='notify__header--left'>
                            <BellOutlined /> Notification
                        </div>
                        <div className='notify__header--right'>
                            <Button type='link'>View All</Button>
                        </div>
                    </div>
                    <div className='notify__body'>
                        {menu}
                    </div>
                </div>
            )} >
                <Badge dot={true}>
                    <Button type='text' icon={<BellOutlined />}></Button>
                </Badge>
            </Dropdown>
        </>
    )
}
