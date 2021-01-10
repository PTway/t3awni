import React from 'react';
import './App.less';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Company } from './pages/company';
import { Student } from './pages/student';
import { AdminLogin } from './pages/admin';
import { ExportData } from './pages/admin/export_data';

const App = () => {
  return (
    <ConfigProvider direction='rtl'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/company' component={Company} />
          <Route exact path='/student' component={Student} />
          <Route exact path='/admin' component={AdminLogin} />
          <Route exact path='/admin/home' component={ExportData} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;
