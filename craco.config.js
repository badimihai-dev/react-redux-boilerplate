const path = require("path");

module.exports = function ({ env, paths }) {
  console.log(
    path.join(__dirname, "src", "environments", process.env.CLIENT_ENV)
  );
  return {
    babel: {
      presets: [],
    },
    webpack: {
      alias: {
        environment: path.join(
          __dirname,
          "src",
          "environments",
          process.env.CLIENT_ENV
        ),
      },
    },
    jest: {
      configure: {
        modulePathIgnorePatterns: ["<rootDir>/src/environments"],
        moduleNameMapper: {
          environment: "<rootDir>/src/environments/test",
        },
      },
    },
  };
};
