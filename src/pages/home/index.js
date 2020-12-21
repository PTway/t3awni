import React from 'react';
import { Button, Col, Row, Space } from 'antd';
import { Container } from '../../layout';
import logo from '../../assets/images/btn-logo.svg';

export const Home = () => {
  return (
    <Container>
      <Row className='home-page'>
        <Col span={20} offset={1}>
          <h2 className='title'>للتدريب التعاوني</h2>
          <div className='body-container'>
            <h4 className='sub-title'>بوابتك المهنية تبدأ مع تعاوني</h4>
            <p className='description'>
              تعاوني هي منصة تجمع الطلاب المقبلين على التخرج <br />
              والشركات التي تقدم برامج تدريبية تساهم في تحفيز الطلاب <br />
              وتطوير مهارات التوظيف لديها.
            </p>
            <Row gutter={40}>
              <Col lg={9} sm={24} xs={24}>
                <Button className='trainer'>
                  أبحث عن متدربين
                  <img src={logo} />
                </Button>
              </Col>
              <Col lg={9} sm={24} xs={24}>
                <Button className='training'>
                  أبحث عن تدريب تعاوني
                  <img src={logo} />
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
