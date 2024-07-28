import React from 'react'
import { Row, Col, Carousel, Collapse } from "antd";
import './LearnGrid.css';
import CardItem from '../CardItem';

export default function LearnGrid() {

    const question = [
        {
            key: '1',
            label: 'Câu hỏi 1',
            children: <p>Câu trả lời 1</p>
        },
        {
            key: '2',
            label: 'Câu hỏi 2',
            children: <p>Câu trả lời 2</p>
        },
        {
            key: '3',
            label: 'Câu hỏi 3',
            children: <p>Câu trả lời 3</p>
        },
    ]
    return (
        <>

            <div className="carousel">
                <Carousel arrows infinite={false} autoplay >
                    <div className="carousel__item">1</div>
                    <div className="carousel__item">2</div>
                    <div className="carousel__item">3</div>
                    <div className="carousel__item">4</div>
                </Carousel>
            </div>

            <Row gutter={[10, 10]}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title='Box 1' />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title='Box 2' />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title='Box 3' />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title='Box 4' />
                </Col>
            </Row>

            <Row gutter={[10, 10]} className='mt-20'>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem title='Box 5' style={{ height: '400px' }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title='Box 6' style={{ height: '400px' }} />
                </Col>
            </Row>

            <Row gutter={[10, 10]} className='mt-20'>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title='Box 7' style={{ height: '400px' }} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem title='Box 8' style={{ height: '400px' }} />
                </Col>
            </Row>

            <Row gutter={[10, 10]} className='mt-20'>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title='Box 9' style={{ height: '400px' }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title='Box 10' style={{ height: '400px' }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title='Box 11' style={{ height: '400px' }} />
                </Col>
            </Row>

            <Collapse items={question} defaultActiveKey={'1'} accordion/>

        </>
    )
}
