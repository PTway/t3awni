import React from 'react';
import { Button, Col, Row } from 'antd';
import { Container } from '../../layout';
import logo from '../../assets/images/btn-logo.svg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <Row className='home-page'>
        <Col
          lg={{ span: 20, offset: 1 }}
          sm={{ span: 22, offset: 0 }}
          xs={{ span: 22, offset: 0 }}
        >
          <h2 className='title'>للتدريب التعاوني</h2>
          <div className='body-container'>
            <h4 className='sub-title'>بوابتك المهنية تبدأ مع تعاوني</h4>
            <p className='description'>
              تعاوني هي منصة تجمع الطلاب المقبلين على التخرج
              {window.innerWidth > 767 && <br />}
              والشركات التي تقدم برامج تدريبية تساهم في تحفيز الطلاب
              {window.innerWidth > 767 && <br />}
              وتطوير مهارات التوظيف لديها.
            </p>
            <Row gutter={40}>
              <Col lg={9} sm={24} xs={24}>
                <Link to='/company'>
                  <Button className='trainer'>
                    أبحث عن متدربين
                    <img src={logo} />
                  </Button>
                </Link>
              </Col>
              <Col lg={9} sm={24} xs={24}>
                <Link to='/student'>
                  <Button className='training'>
                    أبحث عن تدريب تعاوني
                    <img src={logo} />
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
