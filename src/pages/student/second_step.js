import React from 'react';
import { Col, Form, Input, Row, Select } from 'antd';

export const SecondStep = () => {
  const cities = ['الدمام', 'الرياض', 'جدة', 'مكة', 'المدينة'];

  return (
    <>
      <Row justify='space-between' align='middle'>
        <Col span={12}>
          <h3 className='title'>معلومات المتدرب</h3>
        </Col>
        <Col span={4} offset={8}>
          <h3 className='title'>2—2</h3>
        </Col>
      </Row>
      <span className='label'>إسم المتدرب</span>
      <Form.Item
        name='fullName'
        rules={[{ required: true, message: 'الرجاء ادخال الاسم كاملاً' }]}
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

      <h4 className='label'>المدينة</h4>
      <Form.Item
        name='city'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال المدينة',
          },
        ]}
      >
        <Select>
          {cities.map((elm) => (
            <Select.Option key={elm} value={elm}>
              {elm}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <span className='label'>البريد الإلكتروني</span>
      <Form.Item
        name='email'
        rules={[{ required: true, message: 'الرجاء ادخال البريد الالكتروني' }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};
