import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CodeOutlined,
  HomeOutlined,
  UserOutlined,
  MehOutlined
} from '@ant-design/icons';
import {Breadcrumb, Button, Layout, Menu, theme } from 'antd';


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



const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG},
  } = theme.useToken();
  return (
    <Layout className='bg-green-300'>
      <Sider trigger={null} collapsible collapsed={collapsed}
      className='w-60 h-[100vh] pt-5 sticky'>
        <div className='px-5 h-12 text-white font-black text-2xl font-serif ' >
          {collapsed?<MehOutlined/> : <><MehOutlined/> yushna417</> }</div>
        <Menu
          className='text-base font-normal  font-sans'
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className='bg-green-400 w-full border'
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '23px',
              width: 64,
              height: 64,
            }}
           
          />
        </Header>
        <Content
        className='bg-green-300'
         style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;