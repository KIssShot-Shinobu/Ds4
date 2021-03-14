let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = 'https://www.duellinksmeta.com/tier-list/'
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}
handler.help = ['meta']
handler.tags = ['quotes']
handler.command = /^(meta)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

