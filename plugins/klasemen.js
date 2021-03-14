let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  let full = 'https://www.google.com/search?client=opera&q=klasemen+liga+inggris&sourceid=opera&ie=UTF-8&oe=UTF-8#sie=lg;/g/11j4y8fvpd;2;/m/02_tc;st;fp;1;;'
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = 'https://www.google.com/search?client=opera&q=klasemen+liga+inggris&sourceid=opera&ie=UTF-8&oe=UTF-8#sie=lg;/g/11j4y8fvpd;2;/m/02_tc;st;fp;1;;'
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

