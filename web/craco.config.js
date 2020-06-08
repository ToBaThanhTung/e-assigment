const CracoLessPlugin = require("craco-less");
const { volcano } = require("@ant-design/colors");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": volcano.primary },
          },
        },
      },
    },
  ],
};
