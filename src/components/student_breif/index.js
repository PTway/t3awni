import { Col, Row } from 'antd';
import React from 'react';
import group from '../../assets/images/group.svg';
import grad from '../../assets/images/grad.svg';
import edit from '../../assets/images/edit.svg';

export const StudentBreif = () => {
  return (
    <div className='form-breif student-form-breif'>
      <Row>
        <Col span={4}>
          <img src={edit} alt='edit' />
        </Col>
        <Col span={20}>
          <h3 className='title'>حدد فصل التخرج</h3>
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
          <h3 className='title'>تدرب مع الشركة المناسبة</h3>
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
          <h3 className='title'>تخرّج</h3>
          <p className='description'>
            قم بتعبئة بيانات التدريب. وحدد رغباتك والتخصصات التي تريد أن تتدرب
            فيها.
          </p>
        </Col>
      </Row>
    </div>
  );
};
