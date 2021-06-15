import request from '@/service'

export const getMenu = async (params) => {
  return await request.post('/backApi/api/public/menu', params)
}
export const getSetting = async (params) => {
  return await request.post('/backApi/api/public/setting', params)
}
