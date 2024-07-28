import React, { useEffect, useState } from 'react'
import { getListRoom } from '../../services/roomService';
import { Button } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons'
import GridList from './GridList';
import TableList from './TableList';

export default function ListRoom() {
    const [Data, setData] = useState([]);
    const [Display, setDisplay] = useState(false);

    const CallApi = async () => {
        const response = await getListRoom();
        // console.log(response);
        setData(response.reverse())
    };
    useEffect(() => {
        CallApi();
    }, []);

    // console.log(Data)

    const HandleReLoad = () => {
        CallApi();
    }

    return (
        <>
            <div className='typedisplay'>
                <Button type='primary' onClick={() => setDisplay(!Display)}>
                    {Display ? (
                        <UnorderedListOutlined />
                    ) : (
                        <AppstoreOutlined />
                    )}
                </Button>
            </div>

            <div className='show__listroom'>
                {Display ? (
                    <TableList Data={Data} onReLoad={HandleReLoad}/>
                ) : (
                   <GridList Data={Data}/>
                )}
            </div >
        </>
    )
}
