import React from 'react';
import { ConfigProvider } from 'antd';
import './App.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';

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
