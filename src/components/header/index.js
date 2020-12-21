import React from 'react';
import { Col, Row } from 'antd';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <Row justify='space-between' className='header'>
      <Col span={4}>menu</Col>
      <Col span={4}>
        <Row>
          <h3 className='title'>Taawoni</h3>
          <img src={logo} />
        </Row>
      </Col>
    </Row>
  );
};
