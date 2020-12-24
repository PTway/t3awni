import React from 'react';
import { Col, Form, Input, Row } from 'antd';

export const ThirdStep = () => {
  return (
    <>
      <Row justify='space-between' align='middle'>
        <Col span={18}>
          <h3 className='title'>معلومات مسؤول التدريب</h3>
        </Col>
        <Col span={4} offset={2}>
          <h3 className='title'>3—3</h3>
        </Col>
      </Row>
      <span className='label'>إسم المسؤول</span>
      <Form.Item
        name='superVisorName'
        rules={[{ required: true, message: 'الرجاء ادخال اسم المسؤول' }]}
      >
        <Input />
      </Form.Item>
      <span className='label'>المسمى الوظيفي</span>
      <Form.Item
        name='companySize'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <span className='label'>رقم الجوال</span>
      <Form.Item
        name='phone'
        rules={[{ required: true, message: 'الرجاء ادخال رقم الجوال' }]}
      >
        <Input />
      </Form.Item>
      <span className='label'>البريد الإلكتروني</span>
      <Form.Item
        name='email'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>
      <br /> <br />
    </>
  );
};
