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
            message: 'الرجاء اختيار موعد التدريب',
          },
        ]}
      >
        <Select>
          <Select.Option value='2021'> 2021</Select.Option>
          <Select.Option value='2022'> 2022</Select.Option>
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
      <span className='label'> الفصل الدراسي</span>
      <Form.Item
        name='gender'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال  الفصل الدراسي',
          },
        ]}
      >
        <Select>
          <Select.Option value='الأول'> الأول</Select.Option>
          <Select.Option value='الثاني'> الثاني</Select.Option>
        </Select>
      </Form.Item>

      <span className='label'>شهر التدريب </span>
      <Form.Item
        name='trainingSemesterMonth'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال شهر التدريب',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};
