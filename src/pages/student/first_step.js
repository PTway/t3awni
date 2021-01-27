import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import axios from 'axios';

export const FirstStep = () => {
  const [majors, setMajors] = useState();

  useEffect(() => {
    try {
      axios
        .get('https://www.ptway.net/api/get/majors?type=major')
        .then(({ data }) => {
          setMajors(JSON.parse(data.public_Major));
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
          <h3 className='title'>معلومات المتدرب</h3>
        </Col>
        <Col span={4} offset={8}>
          <h3 className='title'>1—2</h3>
        </Col>
      </Row>
      <span className='label'>موعد التدريب التعاوني</span>
      <Form.Item
        name='trainingSemesterYear'
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
        <Select>
          {majors?.map((elm) => (
            <Select.Option key={elm._id} value={elm.majorName}>
              {elm.majorName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <span className='label'> الفصل الدراسي</span>
      <Form.Item
        name='trainingSemester'
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
