let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

Selamat Sore teman teman DS
Hari ini tanggal 28 Maret - 29 Maret akan diadakan pemilihan untuk calon leader DS 7.

Dimohon untuk teman teman DS menggunakan hak pilih nya dengan baik dan bijak untuk memajukan DS dalam waktu 1 tahun kedepan. Demikian yang dapat saya sampaikan Leader VI dan mewakili pengurus.

Link vote : https://bit.ly/31oQ7lN 

Duel Standby United & Stronge

`.trim(), m)
}
handler.help = ['vote']
handler.tags = ['']
handler.command = /^(vote)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = 
