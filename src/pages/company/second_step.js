import React from 'react';
import { Col, Form, Input, Row, Select } from 'antd';

export const SecondStep = () => {
  return (
    <>
      <Row justify='space-between' align='middle'>
        <Col span={12}>
          <h3 className='title'>معلومات الشركة</h3>
        </Col>
        <Col span={4} offset={8}>
          <h3 className='title'>2—3</h3>
        </Col>
      </Row>
      <span className='label'>إسم الشركة</span>
      <Form.Item
        name='companyName'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <span className='label'>حجم المنشأة</span>
      <Form.Item
        name='sizeOfCompany'
        rules={[{ required: true, message: 'الرجاء ادخال حجم الشركة' }]}
      >
        <Select>
          <Select.Option value='1'> 1</Select.Option>
          <Select.Option value='2'> 2</Select.Option>
        </Select>
      </Form.Item>
      <span className='label'>مجال العمل</span>
      <Form.Item
        name='CompanySpecialist'
        rules={[{ required: true, message: 'الرجاء ادخال مجال العمل' }]}
      >
        <Input />
      </Form.Item>
      <span className='label'>القطاع</span>
      <Form.Item
        name='sector'
        rules={[{ required: true, message: 'الرجاء ادخال قطاع العمل' }]}
      >
        <Select>
          <Select.Option value='1'> 1</Select.Option>
          <Select.Option value='2'> 2</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name='city'
        // rules={[
        //   {
        //     required: true,
        //     message: 'الرجاء ادخال المدينة',
        //   },
        // ]}
      >
        <h4 className='label'>المدينة</h4>
        <Select>
          <Select.Option value='1'> 1</Select.Option>
          <Select.Option value='2'> 2</Select.Option>
        </Select>
      </Form.Item>

      <span className='label'>الموقع (خرائط قوقل)</span>
      <Form.Item
        name='Address'
        rules={[{ required: true, message: 'الرجاء ادخال العنوان' }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};
