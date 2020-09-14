import environment from "./base";

/*
 * base.js is the default environment for production.
 * You shouldn't have override anything.
 */

const baseApi = "https://europe-west2-ourmenuapp-ccef5.cloudfunctions.net/api"; //?? to be added
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  // override anything that gets added from base.
};

export default developmentEnv;
