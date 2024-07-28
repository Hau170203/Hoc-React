import React, { useState } from 'react'
import { Col, Input, Row, Button, Checkbox, Space, DatePicker, Radio, Select } from 'antd';
import { bookRoom } from '../../services/bookRoomService';

const {RangePicker} = DatePicker

export default function BookRoom() {

  const [data, setdata] = useState({
    BedType: 'Giường đôi',
    Time: '12 Giờ'
  });

  const optiontimes = []

  for (let i = 7; i < 24; i++) {
    optiontimes.push({
      value: i > 9 ? `${i} giờ` : `0${i} giờ`,
      label: i > 9 ? `${i} giờ` : `0${i} giờ`
    })
  }

  const HandleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // let object = {
    //   ...data,
    //   [e.target.name]: e.target.value,
    // }

    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const HandleChangeCheckbox = (e) =>{
    setdata({
      ...data,
      services: e
    })
  };

  const HandleChangeDate = (_, daytrings) =>{
    setdata({
      ...data,
      Date: daytrings
    })
  }

  const HandleChangeSelect = (e) =>{
    setdata({
      ...data,
      Time: e
    })
  }

  const HandleSubmit =  async() => {
    const response = await bookRoom(data);
    // console.log(response);
    if(response) {
      alert('Đặt phòng thành công')
    } else {
      alert('Vui lòng đặt lại trong giây lát ...')
    }
  }
  return (
    <>
      <h2>Đặt phòng</h2>

      <Row gutter={[20, 20]}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} >
          <p>Họ và tên: </p>
          <Input placeholder='VD: Ngô Văn Hậu' name='fullname' onChange={HandleChange} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <p>Địa chỉ: </p>
          <Input placeholder='VD: Hà Nội' name='address' onChange={HandleChange} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <p>Số điện thoại: </p>
          <Input placeholder='VD: 0354563353' name='phone' onChange={HandleChange} />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <p>Email: </p>
          <Input placeholder='VD: Vana@gmail.com' name='email' onChange={HandleChange} />
        </Col>
        <Col span={12} >
          <p>Thêm dịch vụ: </p>
          <Checkbox.Group onChange={HandleChangeCheckbox}>
            <Space.Compact direction='vertical'>
              <Checkbox value={'Đặt xe 5 chỗ'}>Đặt xe 5 chỗ</Checkbox>
              <Checkbox value={'Đặt xe 7 chỗ'}>Đặt xe 7 chỗ</Checkbox>
              <Checkbox value={'Đặt nhà hàng'}>Đặt nhà hàng</Checkbox>
              <Checkbox value={'Đặt tàu biển'}>Đặt tàu biển</Checkbox>
            </Space.Compact>
          </Checkbox.Group>
        </Col>
        <Col span={12}>
          <p>Chọn loại gường</p>
          <Radio.Group defaultValue={data.BedType} name='Bedtype' onChange={HandleChange} >
              <Radio value={'Giường đôi'} >Giường đôi</Radio>
              <Radio value={'Giường đơn'}>Giường đơn</Radio>
          </Radio.Group>
        </Col>
        <Col span={12} >
          <p>Chọn ngày đến và ngày rời: </p>
          <RangePicker format={'DD-MM-YYYY'} placeholder={['Nhận phòng', 'Trả phòng']} onChange={HandleChangeDate}/>
        </Col>
        <Col span={12}>
          <p>Chọn giờ nhận phòng: </p>
          <Select options={optiontimes} style={{ width: 120 }} defaultValue={data.Time} onChange={HandleChangeSelect}/>
        </Col>
        <Col span={24}>
          <Button type='primary' onClick={HandleSubmit}>Đặt phòng</Button>
        </Col>
      </Row>
    </>
  )
}
