const webex = require('webex/env')
const fs = require('fs')

process.env.WEBEX_ACCESS_TOKEN = MY_TOKEN;

async function SendSparkFileWebexSDK() {
  var roomId = MY_ROOM_ID;
  var stream = fs.createReadStream('./example.jpg');
  await webex.messages.create({
    roomId,
    files: [stream],
    text: 'Here is my file'
  })
}
SendSparkFileWebexSDK();