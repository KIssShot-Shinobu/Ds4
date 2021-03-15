let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

Halo teman-teman.
Izinkan saya Rifaldi [DS]KissShot selaku Leader DS Periode ke VI dengan masa April 2020 - Maret 2021 ingin menginfokan kepada  teman-teman bahwa saat ini kami akan mengadakan pemilihan Leader DS Periode VII.
Adapun untuk teman-teman yang ingin menjadi Leader DS dapat mendaftar melalui form dibawah ini.

https://forms.gle/gBWoNE37srKyAP4y5

Perlu diperhatikan untuk jadwal pemilihan Leader sebagai berikut :

- Waktu pendaftaran ialah 10 hari pertanggal 13 Maret 2021 - 21 Maret 2021

- 13 Maret 2021 - 27 Maret 2021 untuk melakukan kampanye di grup Internal DS

- Serah terima sekaligus perpindahan pengurusan Leader adalah 1 April 2021 - 10 April 2021

- 31 Maret 2021 Leader periode VII resmi diumumkan.

`.trim(), m)
}
handler.help = ['lead']
handler.tags = ['']
handler.command = /^(lead)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

