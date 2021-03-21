let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = 'https://drive.google.com/open?id=1NPfL14PZiGzFC4zFRhBZTi2hihDGk91x'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture('https://drive.google.com/open?id=1NPfL14PZiGzFC4zFRhBZTi2hihDGk91x')
  } catch (e) {

  } finally {
    let name = conn.getName(who)
    let about = (await conn.getStatus('Membangun, Mengayomi, dan berkontribusi bersama-sama membangun Guild DS untuk menjadi lebih baik di Kompetisi Nasional dan Internasional. Serta mempererat tali silahturahmi dan keharmonisan antara member DS.'))
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
hendler.owner = true
handler.help = ['profile [@user]']
handler.tags = ['']
handler.command = /^profile$/i
module.exports = handler
