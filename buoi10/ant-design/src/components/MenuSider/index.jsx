import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, AppstoreOutlined, LayoutOutlined, PieChartOutlined, FileOutlined, LockOutlined } from '@ant-design/icons'

export default function MenuSider() {
    const items = [
        {
            key: 1,
            label: 'Dashboard',
            icon: <DashboardOutlined />,
            children: [
                {
                    key: 1.1,
                    label: <Link to={'/'}>Default </Link>
                },
                {
                    key: 1.2,
                    label: <Link to={'/book-room'} >Book Room</Link>
                },
                {
                    key: 1.3,
                    label: <Link to={'/create-room'}>Create Room</Link>
                },
                {
                    key: 1.4,
                    label: <Link to={'/list-room'}>List Room</Link>
                }
            ]
        },
        {
            key: 2,
            label: 'Apps',
            icon: <AppstoreOutlined />,
            children: [
                {
                    key: 2.1,
                    label: 'Chat'
                },
                {
                    key: 2.2,
                    label: 'File Manager'
                },
                {
                    key: 2.3,
                    label: 'Mail'
                },
                {
                    key: 2.4,
                    label: 'Projects'
                },
                {
                    key: 2.5,
                    label: 'Ecommerce'
                }
            ]
        },
        {
            key: 3,
            label: 'Components',
            icon: <LayoutOutlined />,
            children: [
                {
                    key: 3.1,
                    label: 'General'
                },
                {
                    key: 3.2,
                    label: 'Navigation'
                },
                {
                    key: 3.3,
                    label: 'Data Entry'
                },
                {
                    key: 3.4,
                    label: 'Data Display'
                },
                {
                    key: 3.5,
                    label: 'Feedback'
                },
                {
                    key: 3.6,
                    label: 'Others'
                }
            ]
        },
        {
            key: 4,
            label: 'Chart',
            icon: <PieChartOutlined />
        },
        {
            key: 5,
            label: 'Pages',
            icon: <FileOutlined />,
            children: [
                {
                    key: 5.1,
                    label: 'Profile'
                },
                {
                    key: 5.2,
                    label: 'Invoice'
                },
                {
                    key: 5.3,
                    label: 'Members'
                },
                {
                    key: 5.4,
                    label: 'Pricing'
                },
                {
                    key: 5.5,
                    label: 'Setting'
                },
                {
                    key: 5.6,
                    label: 'Blog',
                    children: [
                        {
                            key: 5.6 - 1,
                            label: 'Blog Grid'
                        },
                        {
                            key: 5.6 - 2,
                            label: 'Blog List'
                        },
                        {
                            key: 5.6 - 3,
                            label: 'Blog Post'
                        },
                    ]
                }
            ]
        },
        {
            key: 6,
            label: 'Authentication',
            icon: <LockOutlined />,
            children: [
                {
                    key: 6.1,
                    label: 'Login 1'
                },
                {
                    key: 6.2,
                    label: 'Login 2'
                },
                {
                    key: 6.3,
                    label: 'Login 3'
                },
                {
                    key: 6.4,
                    label: 'Sign Up 1'
                },
                {
                    key: 6.5,
                    label: 'Sign Up 2'
                },
                {
                    key: 6.6,
                    label: 'Sign Up 3'
                },
                {
                    key: 6.7,
                    label: 'Error 1'
                },
                {
                    key: 6.8,
                    label: 'Error 2'
                }
            ]
        },
    ]

    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1.1']}
                defaultOpenKeys={['1']}
                items={items}
            />
        </>
    )
}
