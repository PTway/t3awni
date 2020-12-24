import { Button, Col, Row } from 'antd';
import React from 'react';

export const LastStep = () => {
  return (
    <Row justify='center'>
      <Col lg={10} sm={24} xs={24} className='last-step'>
        <img />
        <h4 className='title'>سوف يتم التواصل معك قريباً</h4>
        <Button>الصفحة الرئيسية</Button>
      </Col>
    </Row>
  );
};
