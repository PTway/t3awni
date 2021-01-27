import { Button, Col, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { Container } from '../../layout';
import config from '../../layout/config';

const baseUrl = config.getBasePublicUrl() + '/api';
export const ExportData = () => {
  const exportUserData = () => {
    try {
      axios
        .get(`${baseUrl}/getAllStudentsData`)
        .then(({ data }) => {
          if (data) {
            console.log('data', data);
          }
        })
        .catch(() => {
          console.log('Error');
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Container>
      <Row justify='center' align='middle' className='admin-home'>
        <Col lg={8} sm={12} xs={12}>
          <Button onClick={exportUserData}> تصدير معلومات المستخدمين</Button>
        </Col>
      </Row>
    </Container>
  );
};
