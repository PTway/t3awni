const config = {};
let baseUrl;
config.getBasePublicUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://t3awni-test.herokuapp.com';
  } else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://www.taawoni.com';
  } else {
    baseUrl = 'http://localhost/';
  }
  return baseUrl;
};

export default config;
