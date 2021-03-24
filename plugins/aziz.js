let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

PERTANYAAN 1.
kenapa anda mengajukan diri menjadi calon leader tahun ini?

jawab :  Karena ingin kekeluargaan lebih di pentingkan dari pada pribadi, keputusan lead yang bukan pribadi tapi hasil musyawarah dan mufakat. 
Ingin mempertahankan league tim dan solo tournamen internal untuk  memberkuat duelist DS.

PERTANYAAN 2.
kenapa VISI dan MISI yg anda bawa dianggap kurang terlaksana saat ini dan sangat diperlukan bagi guild ini?

jawab : 1. Terkadang lead memberikan keputusan sepihak
2. Terkadang kita tidak keterbukaan kepada yang lain, kurang terbuka akan ketidaksukaan nya kepada keputusan lead
3. Beberapa duelist terkadang belum siap menuju untuk ikut tournamen karena kendala deck kompetitif, padahal duelist bisa ikut tournamen meski deck non meta dan kurang kompetitif melawan beberapa deck
4. Tim yang terbentuk untuk tournamen hanya satu yang siap tempur hanya brigade, untuk sekarang appe ada peningkatan daripada sebelumnya, cheval dan darkside masih ada yang harus di perbaiki


PERTANYAAN 3.
apa yg akan anda lakukan jika VISI dan MISI terhambat karena kesalahan/kelalaian anda sediri?

jawab : Yang pertama meminta maaf karena itu sebuah kesalahan dan menjelaskan kenapa itu bisa terjadi. kesalahan tersebut harus diperbaiki setelahnya agar kesalahan tidak terulang kembali.


PERTANYAAN 4.
apa yg akan anda lakukan jika VISI dan MISI terhambat karena kesalahan/tidak kooperatif dari anggota guild?

Jawab : Menanyakan sebab akibat, jika emang karena sebuah real life itu tidak bisa di pungkiri karena itu emang nomor 1, jika emang ada kesulitan dalam real life diusahakan bisa membantu orang tersebut sebisa nya


PERTANYAAN 5.
jiwa dari komunitas adalah orang2nya.
jika orang2nya baik maka jiwa organisasipun akan baik, begitupun sebaliknya.

bagaimana cara anda mengatur sekumpulan orang2 yg berbeda2 di guild ini?
dan bagaimana tindakan anda jika ada orang yg sulit anda atur?


Jawab : Jika memiliki tujuan yang sama untuk membangun dan menjaga kualitas DS tetap baik maka bagaimana pun mengatur nya kita akan satu tujuan,
Mengatur orang yang sulit di atur ? Kalau orang tersebut sulit dalam hal menjaga kualitas DS dalam hal pembuatan onar di dunia perduelan, kita harus pertanyakan dulu sebab dari orang tersebut melakukan hal itu kenapa, karena mereka memiliki pendapat dan pandangan nya yang bisa berbuat seperti itu, setelah itu kita harus memberikan jalan terbaik agar hal tersebut tidak terulangi
`.trim(), m)
}
handler.help = ['aziz']
handler.tags = ['']
handler.command = /^(aziz)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

