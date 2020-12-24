import { Col, Row } from 'antd';
import React from 'react';
import group from '../../assets/images/group.svg';
import grad from '../../assets/images/grad.svg';
import edit from '../../assets/images/edit.svg';

export const CompanyBreif = () => {
  return (
    <div className='form-breif'>
      <Row>
        <Col span={4}>
          <img src={edit} alt='edit' />
        </Col>
        <Col span={20}>
          <h3 className='title'>حدد فصل التدريب</h3>
          <p className='description'>
            قم بتعبئة بيانات التدريب. وحدد رغباتك والتخصصات التي تريد أن تتدرب
            فيها.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <img src={group} alt='group' />
        </Col>
        <Col span={20}>
          <h3 className='title'>أختر من قائمة المرشحين</h3>
          <p className='description'>
            قم بتعبئة بيانات التدريب. وحدد رغباتك والتخصصات التي تريد أن تتدرب
            فيها.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <img src={grad} alt='grad' />
        </Col>
        <Col span={20}>
          <h3 className='title'>حفّز المتدربين وطوّر مهارات التوظيف </h3>
          <p className='description'>
            قم بتعبئة بيانات التدريب. وحدد رغباتك والتخصصات التي تريد أن تتدرب
            فيها.
          </p>
        </Col>
      </Row>
    </div>
  );
};
