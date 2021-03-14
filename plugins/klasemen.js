let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  let full = 'https://www.premierleague.com/tables'
  let url = 'https://www.premierleague.com/tables'
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}
handler.help = ['kl']
handler.tags = ['']
handler.command = /^(kl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

