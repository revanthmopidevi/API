const Webex = require(`webex`)
const TOKEN = "NjNmMTUxNjgtNjYwNi00MjZmLTg4OTMtNDgyOWExN2YwNzcwNDY3MTk3MzItYjI0_PF84_93291e23-3b2a-45e1-b496-b695b04d0daa"
const webex = Webex.init({
  credentials: {
    access_token: TOKEN
  }
})

const sendMessage = async (text, toPersonEmail) => {
  try {
    await webex.messages.create({
      text: text,
      toPersonEmail: toPersonEmail
    })
  } catch(e) {
    throw new Error(e)
  }
}

module.exports = sendMessage
