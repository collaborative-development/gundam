const path = require("path");

module.exports = {
  addons:[
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register'
  ],
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }

              return true
            }
          }
        }
      ],
    });
    config.module.rules.push({
      test: /\.styl$/,
      use: ["style-loader", "css-loader", "stylus-loader"],
      include: path.resolve(__dirname, "../"),
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
