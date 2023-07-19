import axios from 'axios'

const API_URL = 'http://128.195.151.182:9002/api/devices/register'

// Register user
const register = async (deviceData) => {
  console.log(deviceData)
  const response = await axios.post(API_URL, deviceData)

  if (response.data) {
    localStorage.setItem('device', JSON.stringify(response.data))
  }
  return response.data
}

const deviceService = {
    register,
}

export default deviceService