import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig, RequestInterceptors } from './types'
import { requestSuccess, requestFail, responseSuccess, responseFail } from './interceptors'
class Request {
  instance: AxiosInstance
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(requestSuccess, requestFail)
    this.instance.interceptors.response.use(responseSuccess, responseFail)
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<unknown, T>(config)
        .then((res: any) => {
          const resData = res?.data
          resolve(resData)
        })
        .catch((err: unknown) => {
          reject(err)
        })
    })
  }
}

export default Request
export { RequestConfig, RequestInterceptors }
