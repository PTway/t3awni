import { Button, Col, Form, Input, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../layout';
import config from '../../layout/config';

const baseUrl = config.getBasePublicUrl() + '/api';
export const AdminLogin = () => {
  const onFinish = () => {
    try {
      axios
        .post(`${baseUrl}/adminLogin`)
        .then(({ data }) => {
          if (data) {
            const history = useHistory();
            history.push('/admin/home');
          }
        })
        .catch(() => {
          console.log('Error');
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const onFinishFailed = (error) => {
    console.log('error', error);
  };

  return (
    <Container>
      <Row justify='center' align='middle'>
        <Col lg={10} md={18} xs={24} sm={24}>
          <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className='form-wrapper'
          >
            <span className='label'>البريد الالكتروني</span>
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'الرجاء ادخال البريد الالكتروني' },
              ]}
            >
              <Input />
            </Form.Item>
            <span className='label'>كلمة المرور</span>
            <Form.Item
              name='password'
              rules={[{ required: true, message: 'الرجاء ادخال كلمة المرور' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                تسجيل الدخول
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
