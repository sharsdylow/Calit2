import axios from 'axios'

const REG_URL = 'http://128.195.151.182:9002/api/devices/register'
const FETCH_URL = 'http://128.195.151.182:9002/api/devices/filter_by'

// Register user
const register = async (deviceData) => {
  console.log(deviceData)
  const response = await axios.post(REG_URL, deviceData)

  if (response.data) {
    localStorage.setItem('device', JSON.stringify(response.data))
  }
  return response.data
}

const fetch = async (filter) => {
  const response = await axios.post(FETCH_URL, filter)
  // console.log(response.data)
  return response.data
}

const deviceService = {
    register,
    fetch
}

export default deviceService