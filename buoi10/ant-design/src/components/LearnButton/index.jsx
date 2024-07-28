import React from 'react';
import { Button } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

export default function LearnButton() {
    return (
        <>
            <Button type='dashed' 
            icon={<RedoOutlined spin={true} />} 
            href='https://www.facebook.com/ngo.vanhau.509'
            >Button
            </Button>
        </>
    )
}
