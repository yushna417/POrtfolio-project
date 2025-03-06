import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CodeOutlined,
  HomeOutlined,
  UserOutlined,
  MehOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, ConfigProvider } from 'antd';

const { Header, Sider, Content } = Layout;

function getItem(key, label, icon, children) {
  return {
    key,
    label,
    icon,
    children,
  };
}

const items = [
  getItem('1', 'Home', <HomeOutlined />),
  getItem('sub1', 'About Me', <UserOutlined />, [
    getItem('3', 'Education'),
    getItem('4', 'Skills'),
    getItem('5', 'Experience'),
  ]),
  getItem('6', 'Projects', <CodeOutlined />),
];

const Project = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <div>Projectpage</div>
  );
};

export default Project;
