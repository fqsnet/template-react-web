// import { TOKEN_KEY } from '@/constant'
// import { getToken } from '@/utils/index'

export function requestSuccess(config) {
  // const token = getToken()
  // if (token) {
  //   config.headers[TOKEN_KEY] = token
  // }
  return config
}
export function requestFail(err) {
  console.log('requestFail', err)

  return err
}
export function responseSuccess(res) {
  const { code, message } = res.data
  if (code !== 200) {
    // !200
  }
  if (code === 401) {
    // 401
  }

  return res
}
export function responseFail(err: any) {
  console.log('responseFail', err)
  return err
}
