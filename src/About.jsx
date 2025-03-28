import React from 'react';
import { ReadOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const About = () => (
  <div className = 'border-2 border-dashed mt-24  px-3 '>
    <h2 className='text-xl mt-3'><ReadOutlined/>   ReadMe</h2>
    <hr className='my-3 text-' />
  </div>
);
export default About;