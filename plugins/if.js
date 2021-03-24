let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

PERTANYAAN 1.
kenapa anda mengajukan diri menjadi calon leader tahun ini?

jawab : Karena saya harus mengayomi, melindungi, dan menjaga kebersamaan di dalam guild ini serta mempertahankan guild ini untuk tetap lebih baik,dan berbuat lebih dan lebih (positif) di game yugioh duel links.

PERTANYAAN 2.
kenapa VISI dan MISI yg anda bawa dianggap kurang terlaksana saat ini dan sangat diperlukan bagi guild ini?

jawab : 

Visi dan Misi dianggap kurang terlaksana? Ya wajar, karena memang belum terlaksana. Visi dan Misi saya sangat diperlukan karena untuk menunjang Guild DS untuk menjadi lebih baik dalam kompetitif dan kebersamaan dalam kekeluargaan.


PERTANYAAN 3.
apa yg akan anda lakukan jika VISI dan MISI terhambat karena kesalahan/kelalaian anda sediri?

jawab : Yang saya lakukan jika visi misi saya terhambat tentu dijelaskan secara baik baik ke seluruh member DS alasan sampai terhambat.


PERTANYAAN 4.
apa yg akan anda lakukan jika VISI dan MISI terhambat karena kesalahan/tidak kooperatif dari anggota guild?

Jawab : Tidak ada, semua pasti ada sebab akibat. Hal seperti ini tidak bisa disimpulkan sekarang. Harus dicari tau dulu.


PERTANYAAN 5.
jiwa dari komunitas adalah orang2nya.
jika orang2nya baik maka jiwa organisasipun akan baik, begitupun sebaliknya.

bagaimana cara anda mengatur sekumpulan orang2 yg berbeda2 di guild ini?
dan bagaimana tindakan anda jika ada orang yg sulit anda atur?


Jawab : Tidak ada,sudah pada dewasa.
Jika ada yang sulit diatur, tidak masalah yang terpenting tidak mengganggu yang lain dan selalu di ingatkan secara baik2.


`.trim(), m)
}
handler.help = ['if']
handler.tags = ['']
handler.command = /^(if)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

