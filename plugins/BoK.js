let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
DS Tournament
Battle Of Kaisar

Waktu:
Tgl 24 - 25 Maret 2021
Waktu duel mulai pkl 20.00 WIB 

 Reward :
 1st 350K
 2nd 150K

Pendaftaran:
1. Biaya pendaftaran gratis.
2. Umum
3. Slot max 128
4. Wajib join discord DS dan menggunakan nama sesuai nama Samsh.gg https://discord.gg/dbsruDT8s2
5. Akhir pendaftaran  19:30 24-03-2021
6. Link pendaftaran : https://bit.ly/3lAoi2Q
7. Jika pendaftar sudah mencapain 128 selanjutnya akan masuk waiting list 


Format:
1. Only King Of Games (For Non DS) 
2. Banlist konami
3. Deck Bebas

Sistim Pertandingan:
1. Single eliminasi
2. Best of 3 (hasil bisa 2:0 atau 2:1)
3. Lawan terlambat 10 mnt, maka dianggap kalah.
 
Aturan Pertandingan:
1. jika terjadi DC sebelum DRAW, pertandingan dapat di ulang, selain itu dianggap KALAH.
2. jika terjadi glitches/bug saat pertandinga berlangsung moderator akan memutuskan berdasarkan kondisi field
3. Melanggar format, dianggap gugur.
4. post hasil di smash.gg

Aturan Room:
1. Rules: Casual
2. Entry Conditions: None
3. Regulation Settings: Normal Regulation
4. Recruit Spectators: ON
5. Spectate: ON
6. View Replays: ON
7. Duel Timer: 180
`.trim(), m)
}
handler.help = ['kaisar']
handler.tags = ['']
handler.command = /^(kaisar)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

