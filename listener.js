let zmq = require('zeromq')
let sock = zmq.socket('sub')
const Converter = require("@iota/converter");
const spawn = require("child_process").spawn;

sock.connect('tcp://tanglebeat.com:5557')
sock.subscribe('tx')
sock.subscribe('sn')

const address =
  "GHLEMUXUIYJK9SKXOUMNEKZBRDHZVFUURXOYMQQODSWEGYRROOGGILVYTGTCCLOYDCETCKHUT9LRXJMMD";

sock.on('message', msg => {
  console.log(msg)
  const data = msg.toString().split(' ') // Split to get topic & data
  switch (
    data[0] // Use index 0 to match topic
  ) {
    case 'tx':
      if(data[2] == address) {
        //console.log(`I'm a TX!`, data)
        console.log(`ADDRESS`, data[2])
        console.log(`AMOUNT`, data[3])
        console.log(`BUNDLE`, data[8])
        console.log(`TAG`, data[12])
        const pythonProcess = spawn('python3',["/home/ubuntu/dev4/smart-city/v1/tetris/workspace/src/tetris_snes.py", "adrien"]);
        pythonProcess.stdout.on('data', (data_python) => {
          console.log(data_python)
        });
      }
      break
    case 'sn':
      if(data[3] == address) {
        //console.log(`I'm a confirmed TX`, data)
        console.log(`confirmed TX BUNDLE`, data[6])
      }
      break
  }
})