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



const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, bodyBg},
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#27667B',
          borderRadius: 2,
          bodyBg: '#C7D9DD',
          
          // Alias Token
          colorBgContainer: '#ADB2D4',
        },
      }}
    >
    
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}
      className='w-60 h-[100vh] pt-5 sticky'>
        <div className='px-5 h-12 text-white font-black text-xl montserrat-custom  tracking-wider' >
          {collapsed?<MehOutlined/> : <><MehOutlined/> PortFolio</> }</div>
        <Menu
          className='text-base font-normal montserrat-custom  '
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
          className=' w-[83vw] border   shadow-2xl '
          
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
            className='text-white'
           
          />
        </Header>
        <Content
        className='bg-[#F7F7F7] indie-flower-regular mt-[9px] mx-5 max-w-5xl w-[80vw] h-full border-2 rounded-t-lg shadow-2xl p-5'
         
        >
          Content, Hi, this is going to be the content of the page
        </Content>
      </Layout>
    </Layout>
    </ConfigProvider>
  );
};
export default App;