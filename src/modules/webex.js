const Webex = require(`webex`)
const TOKEN = "YWI4NDJkMjktNGYwOS00MjY0LWE2NmQtYzMyZmE3YjIxYmViZjZlNjQxYmEtNzM3_PF84_93291e23-3b2a-45e1-b496-b695b04d0daa"
const webex = Webex.init({
  credentials: {
    access_token: TOKEN
  }
})

webex.messages.create({
  text: "API is runnning successfully.",
  toPersonEmail: "revanthmopidevi@gmail.com"
})
.catch((e) => {
  console.log(e)
})