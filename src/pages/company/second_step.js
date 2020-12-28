import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import axios from 'axios';

export const SecondStep = () => {
  const [cities, setCities] = useState();

  useEffect(() => {
    try {
      axios
        .get('https://www.ptway.net/api/getcity?type=city')
        .then(({ data }) => {
          setCities(JSON.parse(data.cities));
        })
        .catch(() => {
          console.log('Error');
        });
    } catch (error) {
      console.log('error', error);
    }
  }, []);

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
        rules={[{ required: true, message: 'الرجاء ادخال اسم الشركة' }]}
      >
        <Input />
      </Form.Item>
      <span className='label'>حجم المنشأة</span>
      <Form.Item
        name='sizeOfCompany'
        rules={[{ required: true, message: 'الرجاء ادخال حجم الشركة' }]}
      >
        <Select>
          <Select.Option value={'0-1'}> 0-1</Select.Option>
          <Select.Option value={'2-10'}> 2-10</Select.Option>
          <Select.Option value={'11-50'}> 11-50</Select.Option>
          <Select.Option value={'21-200'}> 21-200</Select.Option>
          <Select.Option value={'201-500'}> 201-500</Select.Option>
          <Select.Option value={'500-1000'}> 500-1000</Select.Option>
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
          <Select.Option value='قطاع خاص'>قطاع خاص</Select.Option>
          <Select.Option value='قطاع حكومي'>قطاع حكومي</Select.Option>
        </Select>
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
          {cities?.map((elm) => (
            <Select.Option key={elm._id} value={elm.cityName}>
              {elm.cityName}
            </Select.Option>
          ))}
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
