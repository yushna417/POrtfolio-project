import React, { useState } from 'react';
import {
  MailOutlined,
  AimOutlined,
  GithubOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import { Button, Space} from 'antd';



const Home = () => {
 
  
  return (
    <div className='w-full px-5 mb-10'>
        <div className='w-full md:h-40 h-24 bg-[#3B6790]  text-white md:p-5 p-3 text-base flex justify-end items-end  '>
            <div className='montserrat-custom text-left md:space-y-2 md:text-base text-xs '>
                <p className='gap-5 flex items-center '>
                    <AimOutlined /> Imadol, Lalitpur
                </p>
                <p className='gap-5 flex items-center '>
                    <MailOutlined/> buddhacharyay@gmail.com
                </p>
            </div>
        </div>
        <div>
      <h1 className=' text-left roboto-slab-custom tracking-wide mt-10 '>
        Hi, I'm Yushna Buddhacharya.
      </h1>
      <h2 className=' text-2xl roboto-slab-custom font-bold my-4 '>3rd Year Computing Student</h2></div>
        <Space className='text-5xl  mt-5 '>
            <GithubOutlined className='hover:shadow-slate-600'/>
            <LinkedinOutlined/>
        </Space>
        <div className='mt-8'>
            <Space>
            <Button type='primary' className='montserrat-custom text-base font-bold'>Download Resume</Button>
            <Button ghost type='dashed'> Projects</Button></Space>
        </div>
    </div>
    )
};
  
export default Home;
