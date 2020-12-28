import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Radio, Row, Select } from 'antd';
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
          <h3 className='title'>معلومات التدريب</h3>
        </Col>
        <Col span={4} offset={8}>
          <h3 className='title'>1—3</h3>
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
          <Select.Option value='1'> 1</Select.Option>
          <Select.Option value='2'> 2</Select.Option>
        </Select>
      </Form.Item>
      <span className='label'>التخصص</span>
      <Form.Item
        name='Major'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال التخصص',
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
      <span className='label'>الجنس</span>
      <Form.Item
        name='gender'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال الجنس',
          },
        ]}
      >
        <Select>
          <Select.Option value='أنثى'> أنثى</Select.Option>
          <Select.Option value='ذكر'> ذكر</Select.Option>
        </Select>
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

      <span className='label'>نوع التدريب </span>
      <Form.Item
        name='typeOfOrder'
        rules={[
          {
            required: true,
            message: 'الرجاء ادخال نوع التدريب',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <h4 className='label'>إمكانية صرف مكافئة تدريب</h4>
      <Form.Item
        name='salary'
        rules={[
          {
            required: true,
            message: 'الرجاء اختيار أحد الخيارات',
          },
        ]}
      >
        <Radio.Group>
          <Radio value={false}>لا يوجد مكافئة نقدية</Radio>
          <Radio value={true}>
            يوجد مكافئة نقدية
            {/* {value === 4 ? (
                             <Input style={{ width: 100, marginLeft: 10 }} />
                           ) : null} */}
          </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};
