import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const $api = axios.create({
  withCredentials: true,
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  return config;
});

$api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/refresh`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("token", response.data.accessToken);

        return $api.request(originalRequest);
      } catch (e) {
        console.log("not auth");
      }
    }
    throw error;
  }
);
