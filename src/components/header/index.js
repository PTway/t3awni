import React from 'react';
import { Col, Row } from 'antd';
import logo from '../../assets/images/logo.svg';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Row justify='space-between' align='middle' className='header'>
      <Col lg={4} md={8} sm={12} xs={12}>
        <Link to='/'>
          <HomeOutlined />
        </Link>
      </Col>
      <Col lg={4} md={8} sm={12} xs={12}>
        <Row>
          <h3 className='title'>Taawoni</h3>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </Row>
      </Col>
    </Row>
  );
};
