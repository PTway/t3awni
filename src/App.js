import React from 'react';
import './App.less';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';

const App = () => {
  return (
    <ConfigProvider direction='rtl'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;
