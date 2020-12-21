import React from 'react';
import { Row, Col } from 'antd';
import { Header } from '../components/header';

export const Container = (props) => {
  const { children } = props;
  return (
    <>
      <Row justify='center' align='top' className='container-layout'>
        <Col lg={20} sm={24}>
          <Header />
          <section>{children}</section>
        </Col>
      </Row>
    </>
  );
};
