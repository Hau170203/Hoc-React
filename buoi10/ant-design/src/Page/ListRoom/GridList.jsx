import React from 'react'
import { Row, Col, Badge, Tag, Card } from 'antd'

export default function GridList(pros) {
    const {Data} = pros;
    return (
        <>
            <Row gutter={[20, 20]} >
                {Data.map(item => (
                    <Col span={12} key={item.id}>
                        {item.typeroom ? (
                            <Badge.Ribbon text="Vip" color='purple'>
                                <Card title={item.name}>
                                    <div>Số lượng giường: {item.quantitybed}</div>
                                    <div>Số lượng người: {item.quantitypeople}</div>
                                    <div>Các tiện ích:
                                        {
                                            item.utils && item.utils.length > 1 ? (
                                                (item.utils).map((items, index) => (
                                                    <p key={index}>* {items}</p>
                                                ))
                                            ) : (
                                                <p>* {item.utils}</p>
                                            )

                                        }

                                    </div>

                                    {item.status ? (
                                        <p>Trạng thái: <Tag color="processing">Còn phòng</Tag></p>
                                    ) : (
                                        <p>Trạng thái: <Tag color="error">Hết phòng</Tag></p>
                                    )}
                                </Card>
                            </Badge.Ribbon>
                        ) : (
                            <Card title={item.name}>
                                <div>Số lượng giường: {item.quantitybed}</div>
                                <div>Số lượng người: {item.quantitypeople}</div>
                                <div>Các tiện ích:
                                    {
                                        item.utils && item.utils.length > 1 ? (
                                            (item.utils).map((items, index) => (
                                                <p key={index}>* {items}</p>
                                            ))
                                        ) : (
                                            <p>* {item.utils}</p>
                                        )

                                    }

                                </div>

                                {item.status ? (
                                    <p>Trạng thái: <Tag color="processing">Còn phòng</Tag></p>
                                ) : (
                                    <p>Trạng thái: <Tag color="error">Hết phòng</Tag></p>
                                )}
                            </Card>
                        )}
                    </Col>
                ))}
            </Row>
        </>
    )
}
