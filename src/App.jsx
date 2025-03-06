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
    token: { colorBgContainer },
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
      <Layout style={{ minHeight: '100vh', minWidth: '100vw' }}>
        <Sider 
          
          trigger={null} 
          collapsible 
          collapsed={collapsed} 
          width={250} // Set fixed width for Sider
          className="h-[100vh] pt-2 sticky"
        >
          <div
            className={`px-5 h-12 text-white font-black tracking-wider flex items-center justify-center ${
              collapsed ? 'text-3xl flex items-center justify-center' : 'text-xl'
            } montserrat-custom`}
          >
            {collapsed ? <MehOutlined /> : <><MehOutlined /> PortFolio</>}
          </div>
          <Menu
            className="text-base font-normal montserrat-custom"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
          />
        </Sider>
        <Layout style={{ minWidth: 'auto'}}>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="w-full shadow-2xl"
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
              className="text-white"
            />
          </Header>
          <Content
            className="bg-[#F7F7F7] indie-flower-regular mt-[9px] mx-5 rounded-t-lg shadow-2xl p-5"
            style={{
              marginInline: collapsed ? 40 : 25, // Adjust content margin based on Sider collapse state
              transition: 'margin-left 0.3s', // Smooth transition for margin adjustment
              padding: '20px',
            }}
          >
            Content, Hi, this is going to be the content of the page
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
