const Webex = require(`webex`)
const TOKEN = "NTlhNDA1YjItNDUxNS00NTNkLWJiN2ItMTUxYjQ5NWE4YmNmYWZkMGQ4OWYtYzZi_PF84_93291e23-3b2a-45e1-b496-b695b04d0daa"
const webex = Webex.init({
  credentials: {
    access_token: TOKEN
  }
})

const sendMessage = async (text) => {
  try {
    await webex.messages.create({
      text: text,
      roomId: "Y2lzY29zcGFyazovL3VzL1JPT00vZDRjZjVkOTAtYjZjZS0xMWViLWE0ODYtZDVmMDdlMGFiMWZh",
      // toPersonEmail: toPersonEmail
    })
  } catch(e) {
    throw new Error(e)
  }
}

module.exports = sendMessage
