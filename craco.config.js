const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { 
            "@primary-color": "#32b668",
            "@link-color": "#84c774",
            "@border-radius-base": "6px"
           },
          },
        }
      }
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/default.less'),
      },
    },
  ]
};