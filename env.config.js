const path = require('path');

const outputConfig = {
  destPath: "./build"
};

// Entry points
const entryConfig = [
  "./src/index.tsx",
  "./src/sass/styles.scss",
];


// Copy files from public to build
const copyPluginPatterns = {
  patterns: [
    { from: "./public/img", to: "img" },
    { from: "./public/icons", to: "img" },
    { from: "./public/fonts", to: "fonts" }
  ]
};


// Dev server setup
const devServer = {
  static: {
    directory: path.join(__dirname, outputConfig.destPath),
  }
};


// SCSS compile
const scssConfig = {
  destFileName: "css/styles.min.css"
};


// Production terser config options
const terserPluginConfig = {
  extractComments: false,
  terserOptions: {
    compress: {
      drop_console: true,
    },
  }
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;
