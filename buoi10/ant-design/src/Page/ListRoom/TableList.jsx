import { Tag, Table } from 'antd';
import React from 'react'
import DelRoom from './DelRoom';
import EditRoom from './EditRoom';

export default function TableList(pros) {
    const {Data, onReLoad} = pros;

    const columns = [
        {
            title: "Tên phòng",
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: "Số giường",
            dataIndex: 'quantitybed',
            key: 'quantitybed'
        },
        {
            title: "Số người",
            dataIndex: "quantitypeople",
            key: 'quantitypeople'
        },
        {
            title: "Các tiện ích",
            dataIndex: "utils",
            key: "utils",
            render: (_, { utils } ) => (
                <>
                    {utils.map((util, index) => (
                        <p key={index}>* {util}</p>
                    ))}
                </>
            )
        },
        {
            title: 'Trạng thái',
            dataIndex: "status",
            key: "status",
            render: (_, {status}) => (
                <>
                {status ? (
                    <Tag color="processing">Còn phòng</Tag>
                ) : (
                    <Tag color="error">Hết phòng</Tag>
                )}
                </>
            )
        }
        ,
        {
            title: 'Loaị phòng',
            dataIndex: "typeroom",
            key: "typeroom",
            render: (_, {typeroom}) => (
                <>
                    {typeroom ? (
                        <Tag color="purple">Phòng Vip</Tag>
                    ) : (
                        <Tag color='default' >Phòng thường</Tag>
                    )}
                </>
            )
        },
        {   
            
             render: (_, record) => (
                <>
                    <DelRoom record={record} onReLoad={onReLoad} />
                    <EditRoom record={record} onReLoad={onReLoad} />
                </>
             )
        }
    ]
  return (
    <>
        <Table dataSource={Data} columns={columns} rowKey={'id'} pagination={{pageSize: 4}}/>
    </>
  )
}
