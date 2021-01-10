import React from 'react';
import './App.less';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Company } from './pages/company';
import { Student } from './pages/student';

const App = () => {
  return (
    <ConfigProvider direction='rtl'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/company' component={Company} />
          <Route exact path='/student' component={Student} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;
