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
import Home from './Home';
import About from './About';
import Project from './Project';

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
  getItem('2', 'About Me', <UserOutlined />, [
    getItem('3', 'Education'),
    getItem('4', 'Skills'),
    getItem('5', 'Experience'),
  ]),
  getItem('6', 'Projects', <CodeOutlined />),
];

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = window.innerWidth <= 768;  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3B6790',
          borderRadius: 2,
          bodyBg: '#C7D9DD',
          colorBgContainer: '#ADB2D4',
        },
      }}
    >
      <Layout style={{  minWidth: '98vw', position: 'relative' }}>
        <Sider 
          style={siderStyle}
          trigger={null} 
          collapsible 
          collapsed={collapsed} 
          collapsedWidth={isMobile ? 0 : 80} // Set collapsed width to 0 on mobile
          width={200} // Set fixed width for Sider
          className="h-[100vh] pt-2 sticky"
        >
          <div
            className={`px-5 h-12 text-white font-black tracking-wider flex items-center justify-center ${
              collapsed ? 'text-3xl flex items-center justify-center' : 'text-xl flex-row gap-3'
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
        <Layout >
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
            className="bg-[#F7F7F7]  mt-[9px]  rounded-t-lg shadow-2xl p-5"
            
          >
            <Home />
            <About />
            <Project />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
