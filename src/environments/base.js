export default function baseEnv(baseApi) {
  return {
    route: {
      baseRoute: "/",
    },
    api: {
      restaurant: `${baseApi}/restaurant`,
      category: `${baseApi}/restaurant/category`,
    },
    localStorage: { guestTokenExpiry: 21600000 },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
