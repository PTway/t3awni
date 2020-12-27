import React from 'react';
import { Col, Form, Input, Row, Select } from 'antd';

export const FirstStep = () => {
  return (
    <>
      <Row justify='space-between' align='middle'>
        <Col span={12}>
          <h3 className='title'>معلومات المتدرب</h3>
        </Col>
        <Col span={4} offset={8}>
          <h3 className='title'>1—2</h3>
        </Col>
      </Row>
      <span className='label'>موعد التدريب التعاوني</span>
      <Form.Item
        name='orders'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Select>
          <Select.Option value='1'> 1</Select.Option>
          <Select.Option value='2'> 2</Select.Option>
        </Select>
      </Form.Item>
      <span className='label'>إسم الجامعة</span>
      <Form.Item
        name='university'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال اسم الجامعة',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <span className='label'>التخصص</span>
      <Form.Item
        name='Major'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال اسم التخصص',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};
