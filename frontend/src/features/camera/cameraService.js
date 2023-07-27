import axios from 'axios'

const START_URL = "http://localhost:8000/start-stream"

const startStream = async(camera) => {
    const res = await axios.get(START_URL, {
        params: {url: camera.ip_address, port: camera.port, key: camera.name}
    });
    console.log(res.data.message);
}

const cameraService = {
    startStream,
}

export default cameraService