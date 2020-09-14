export default function baseEnv(baseApi) {
  return {
    route: {
      baseRoute: "/",
    },
    api: {},
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
