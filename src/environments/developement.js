import environment from "./base";

const baseApi = "http://localhost:5000/ourmenuapp-ccef5/europe-west2/api";
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  // override anything that gets added from base.
  api: {
    ...env.api,
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
