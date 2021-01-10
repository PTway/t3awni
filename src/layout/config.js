const config = {};
let baseUrl;
config.getBasePublicUrl = () => {
  if (process.env.NODE_ENV === 'development') {
//     baseUrl = 'https://t3awni-test.herokuapp.com';
        baseUrl = 'http://167.172.16.107/';

  } else if (process.env.NODE_ENV === 'production') {
//     baseUrl = 'https://t3awni.com/';
        baseUrl = 'http://167.172.16.107/';

  } else {
    baseUrl = 'http://localhost/';
  }
  return baseUrl;
};

export default config;
