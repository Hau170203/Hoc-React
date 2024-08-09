import React, { useEffect, useState } from 'react'
import { getListTopic } from '../../Services/TopicService';
import { Button, Card, Col, Row } from 'antd';
import './Topic.scss';
import Meta from 'antd/es/card/Meta';


export default function Topic() {
  const [data, setData] = useState();

  useEffect(() => {
    const CallApi = async () => {
      const result = await getListTopic();
      setData(result);
    };
    CallApi();
  }, []);

  // console.log(data);


  return (
    <>
      <h2 className='title'>Danh sách các chủ đề</h2>
      <div className='topic'>
        <Row gutter={[20, 20]}>
          {data && (
            data.map(item => (
              <Col span={6} key={item.id}>
                  <Card className='topic__item' cover={<img alt={item.name} src={item.image} />}>
                  <Meta title={item.name} />
                  <Button type='primary' href={'quiz/' +item.id}> Xem chi tiết</Button>
                  </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    </>
  )
}