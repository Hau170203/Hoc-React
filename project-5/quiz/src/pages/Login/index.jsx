import React, { useState } from 'react'
import { Button, Form, Input, message, Modal } from 'antd';
import './Login.scss';
import { createAccount, isAccount, login } from '../../Services/LoginService';
import { useNavigate } from 'react-router-dom'
import { setCookie } from '../../Helpers/Cookie';
import { RandomToken } from '../../Helpers/RandomToken';
import { useDispatch } from 'react-redux';
import { ReloadHeader } from '../../action/Reload';

export default function Login() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const rules = [
    {
      required: true,
      message: 'Bắt buộc nhập!'
    }
  ];
  
  const onSubmit = async (e) => {
    const response = await login(e.username, e.password);
    console.log(response);
    if (response.length > 0) {
      messageApi.open({
        type: 'success',
        content: 'Đăng nhập thành công!'
      });
      form.resetFields();
      setTimeout(() => {
        navigate('/');
      }, 2000);
      setCookie('id', response[0].id, 7);
      setCookie('fullName', response[0].fullName, 7);
      setCookie('email', response[0].email, 7);
      setCookie('token', response[0].token, 7);
      dispatch(ReloadHeader(true))
    } else {
      messageApi.open({
        type: 'error',
        content: 'Sai tài khoản hoặc mật khẩu'
      })
    };
  };

  const showModal = () => {
    setIsModal(true);
  };

  const HandleOK = () => {
    setIsModal(false);
  }

  const HandleCancel = () => {
    setIsModal(false);
    form.resetFields();
  }

  const SubmitSignIn = async (e) => {
    // console.log(e);
    const response = await isAccount(e.email);
    if(response.length > 0) {
      messageApi.open({
        type: 'error',
        content: 'Email đã tồn tại'
      })
    } else {
      const options = 
      {
        ...e,
        token: RandomToken()
      }
      // console.log(options);
      const CreateAccoutn = await createAccount(options);
      console.log(CreateAccoutn);
      if(CreateAccoutn) {
        messageApi.open({
          type: 'success',
          content: 'Tạo tài khoản thành công!'
        });
        form.resetFields();
      } else {
        messageApi.open({
          type:'error',
          content: 'Tạo tài khoản thất bại'
        })
      }
    }
  }
  return (
    <>
      {contextHolder}
      <Form className='form'  onFinish={onSubmit} form={form}>
        <h2>Login</h2>
        <Form.Item name='username' rules={rules} >
          <Input id='username' size="large" style={{ width: '400px' }} placeholder='Tên đăng nhập' />
        </Form.Item>
        <Form.Item name='password' rules={rules} >
          <Input.Password id='password' size="large" style={{ width: '400px' }} placeholder='Mật khẩu' autoComplete='password' />
        </Form.Item>
        <Form.Item style={{ width: '400px' }} >
          <div className='account'>
            <Button type='primary' size='large' htmlType='submit'>Đăng nhập</Button>
            <Button type='link' size='large' className='account__signup' onClick={showModal}>Sign up</Button>
          </div>
        </Form.Item>
      </Form>

      <Modal classNames='modal' open={isModal} onOk={HandleOK} onCancel={HandleCancel} centered={true} footer={null}>
        <Form className='modal__form' style={{ maxWidth: 500 }} onFinish={SubmitSignIn} form={form}>
          <h2>Đăng kí</h2>
          <Form.Item name='fullName' rules={rules}>
            <Input id='username2' size='large' style={{ width: '400px' }} placeholder='Họ và tên' />
          </Form.Item>
          <Form.Item name='email' rules={rules}>
            <Input id='email2' size='large' style={{ width: '400px' }} placeholder='Email' />
          </Form.Item>
          <Form.Item name='password' rules={rules}>
            <Input.Password id='password2' size='large' style={{ width: '400px' }} placeholder='Mật khẩu' autoComplete='password' />
          </Form.Item>
          <Form.Item style={{ width: '400px' }}>
            <Button type='primary' size='large' htmlType='submit'>Tạo</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
