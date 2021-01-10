import { Button, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CompanyBreif } from '../../components/company_breif';
import { Container } from '../../layout';
import { FirstStep } from './first_step';
import { LastStep } from './last_step';
import { SecondStep } from './second_step';
import { ThirdStep } from './third_step';
import config from '../../layout/config';

const baseUrl = config.getBasePublicUrl() + '/api';
export const Company = () => {
  const [steps, setSteps] = useState(1);
  const [lastStep, setLastStep] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (steps === 4) {
      try {
        axios
          .post(`${baseUrl}/postCompanyData`, {
            ...formValues,
          })
          .then(({ data }) => {
            console.log('data', data);
            setLastStep(true);
          })
          .catch(() => {
            console.log('Error');
          });
      } catch (error) {
        console.log('error', error);
      }
    }
  }, [steps === 4]);

  const onFinish = (values) => {
    setFormValues({ ...formValues, ...values });
    if (steps < 4) {
      setSteps(steps + 1);
    }
  };

  const prevStep = () => {
    setSteps(steps - 1);
  };

  return (
    <Container>
      {!lastStep ? (
        <Row justify='space-around'>
          <Col lg={20} xs={24} sm={24}>
            <Row gutter={window.innerWidth > 768 ? 150 : 0}>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Form
                  name='basic'
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                  className='form-wrapper'
                >
                  {steps == 1 ? (
                    <FirstStep />
                  ) : steps == 2 ? (
                    <SecondStep />
                  ) : (
                    <ThirdStep />
                  )}
                  <Form.Item>
                    <Row align='middle'>
                      <Col span={10}>
                        {steps !== 1 && (
                          <h4 className='prev-btn' onClick={prevStep}>
                            العودة
                          </h4>
                        )}
                      </Col>
                      <Col span={12}>
                        <Button
                          className='next-btn'
                          type='primary'
                          htmlType='submit'
                        >
                          {steps < 3 ? 'التالي' : 'أنشر'}
                        </Button>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </Col>
              <Col lg={10} md={10} sm={0} xs={0}>
                <CompanyBreif />
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <LastStep />
      )}
    </Container>
  );
};
