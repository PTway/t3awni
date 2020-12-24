import React from 'react';
import { Col, Form, Input, Radio, Row, Select } from 'antd';

export const FirstStep = () => {
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
        name='time'
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
        <Input />
      </Form.Item>
      <span className='label'>الجنس</span>
      <Form.Item
        name='gender'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='salary'
        // rules={[
        //   {
        //     required: true,
        //     message: 'الرجاء اختيار أحد الخيارات',
        //   },
        // ]}
      >
        <h4 className='label'>إمكانية صرف مكافئة تدريب</h4>
        <Radio.Group
          // onChange={this.onChange}
          value={'value'}
        >
          <Radio value={1}>لا يوجد مكافئة نقدية</Radio>
          <Radio value={4}>
            تصرف مكافئة قدرها..
            {/* {value === 4 ? (
                             <Input style={{ width: 100, marginLeft: 10 }} />
                           ) : null} */}
          </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};
