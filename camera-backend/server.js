const app = require("express")();
const Stream = require("node-rtsp-stream");
const streams = {};
var cors = require('cors');

app.use(cors());

const startStream = (name, streamUrl, wsPort) =>{
  const stream = new Stream({
    name,
    streamUrl,
    wsPort,
    ffmpegOptions: { // options ffmpeg flags
      "-f": "mpegts", // output file format.
      "-codec:v": "mpeg1video", // video codec
      "-b:v": "1000k", // video bit rate
      "-stats": "",
      "-r": 25, // frame rate
      "-s": "640x480", // video size
      "-bf": 0,
      // audio
      "-codec:a": "mp2", // audio codec
      "-ar": 44100, // sampling rate (in Hz)(in Hz)
      "-ac": 1, // number of audio channels
      "-b:a": "128k", // audio bit rate
    },
  })
  streams[wsPort] = stream
};

app.get('/start-stream', (req, res)=>{
  console.log('try')
  const {url, port, key="Camera"} = req.query;
  if (!url&&!port){
    return res.json({
      message: "Input Error"
    });
  }
  if (streams[port]){
    return res.json({
      message: "Port is in use"
    });
  }
  startStream(key, url, port)
  res.json({
    message:"Start Stream"
  })
});

app.listen(8000,()=>{
  console.log('Sever running 8000')
  // startStream('camera1',"rtsp://admin:Calit2@192.168.10.102:554/h264Preview_01_main","6789")
});

