import React, { useState } from 'react';
import {Layout} from 'antd';
import './LayoutDefault.css';
import logo from '../image/logo.png';
import logoFold from '../image/logo-fold.png';
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons'
import Notify from '../../components/Notify';
import MenuSider from '../../components/MenuSider';
import { Outlet } from 'react-router-dom';

const { Sider, Content} = Layout;

export default function LayoutDefault() {

    const [collapse, setCollapse] = useState(false);

  return (
    <>
        <Layout className='LayoutDefault'>
            <header className='Header'>
                <div className={'Header__logo ' + (collapse && ' Header__logo--collapse')} >
                    <img src={collapse ? logoFold  : logo } alt="" />
                </div>
                <div className="Header__nav">
                    <div className="Header__nav--left">
                        <div className="Header__nav--collapse" onClick={() => setCollapse(!collapse)}>
                        {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                        </div>
                        <div className="Header__nav--search">
                        <SearchOutlined />
                        </div>
                    </div>
                    <div className="Header__nav--right">
                        <div className='Header__nav--notify'>
                            <Notify />
                        </div>
                    </div>
                </div>
            </header>
            <Layout>
                <Sider className='Sider' collapsed={collapse} theme='light' width={'280px'}>
                    <MenuSider />
                </Sider>

                <Content className='content'>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </>
  )
}
