let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

Join DS 

no douuble Guild 
berprilaku sopan 
hargai sesama member 

NO SARA

silahkan daftar melalui form berikut : https://forms.gle/GomuCa67aKvgt2jb6

dan silahkan PM kontak berikut : 

- https://bit.ly/2OMXiky
- https://bit.ly/3vpP1Uk

`.trim(), m)
}
handler.help = ['murothal']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

