import { Button, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import lastStep from '../../assets/images/last.svg';

export const LastStep = () => {
  return (
    <Row justify='center'>
      <Col lg={10} sm={24} xs={24} className='last-step student-last-step'>
        <img src={lastStep} alt='lastStep' />
        <h4 className='title'>سوف يتم التواصل معك قريباً</h4>
        <Link to='/'>
          <Button>الصفحة الرئيسية</Button>
        </Link>
      </Col>
    </Row>
  );
};
