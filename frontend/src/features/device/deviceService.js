import axios from 'axios'

const REG_URL = 'http://128.195.151.182:9002/api/devices/register'
const FETCH_URL = 'http://128.195.151.182:9002/api/devices/filter_by'
const DEL_URL = 'http://128.195.151.182:9002/api/devices/delete'

// Register user
const register = async (deviceData) => {
  console.log(deviceData)
  const response = await axios.post(REG_URL, deviceData)
  return response.data
}

const fetchByFilter = async (filter) => {
  const response = await axios.post(FETCH_URL, filter)
  // console.log(response.data)
  return response.data
}

const fetchAll = async () => {
  const response = await axios.get(REG_URL)
  return response.data
}

const deleteDevice = async (device_id) => {
  console.log(device_id)
  const device = {device_id: device_id}
  const response = await axios.post(DEL_URL, device)
  return response.data
}

const deviceService = {
    register,
    fetchByFilter,
    fetchAll,
    deleteDevice,
}

export default deviceService