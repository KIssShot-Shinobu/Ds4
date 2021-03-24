let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

PERTANYAAN 1.
kenapa anda mengajukan diri menjadi calon leader tahun ini?

jawab : Karena saya baru gabung dan saya ingin mengembangkan ds ke internasional tournament. Karena clan lain seperti fpf,ux,trust dkk sangat aktif di tour internasional. Dan saya ada pengalaman untuk mewujudkan itu dari tim lain yang pernah saya masukkin. Saya pernah menjadi leader divisi di trust untuk membantu player baru menjadi kompetitif dan menyenangi bermain duel links. Saya pernah jadi pensponsor UX untuk pertama kalinya UX bawa tim sendiri ke CW dengan saya dan meminta bantuan avice untuk menjadi coaching di tim tersebut. Jadi saya ingin memajukan ds dari pengalaman pengalaman saya yang sudah pernah saya jalanin


PERTANYAAN 2.
kenapa VISI dan MISI yg anda bawa dianggap kurang terlaksana saat ini dan sangat diperlukan bagi guild ini?

jawab : 1. Visi saya membawa ds untuk go internasional, tetapi player kompetitif disini lebih sering ikut tim gabungan contoh "garuda dan capitalis". Jadi saya kira ds saat ini punya pemain untuk go internasional tapi kurangnya pengalaman kita untuk berada di kanca internasional sangat dikit. Makanya saya membawakan ini karena sudah saatnya ds maju ke permukaan dan go internasional. Kalo tentang misi saya itu sebenarnya karena saya liat banyak player kompetitif malah join tim lain untuk ikut tour internasional, makanya misi saya untuk menjadikan DS menjadi sarana duelist kompetitif maupun yang ingin menjadi kompetitif. 

Fokus saya dalam periode ini untuk membawa DS ke tour internasional dan mengembangkan player baru yang ingin berkompetitif, tapi tidak lupa juga saya juga ingin mengayomi player yang sudah kompetitif


PERTANYAAN 3.
apa yg akan anda lakukan jika VISI dan MISI terhambat karena kesalahan/kelalaian anda sediri?

jawab : 1. Memang benar, visi misi yang besar dan membawa perubahan itu sangat sulit di terapkan namun saya optimis bahwa ds sudah bisa masuk ke rana internasional. Dengan bantuan dari seluruh member, kita usahakan semaksimal mungkin untuk mewujudkan itu
2. Kalo kelalaian atau kesalahan itu manusiawi, tetapi disitulah peran dari petinggi lain dan member untuk mengingatkan kita kembali tentang tujuan kita. Saya manusia yang kadang salah dan juga melakukan kelalaian namun saya akan memberikan perjuangan maksimal untuk mewujudkannya karena menurut saya, ds saat ini sudah bisa untuk menjalankan dan menerapkan visi misi saya walaupun membutuhkan waktu dan proses

PERTANYAAN 4.
apa yg akan anda lakukan jika VISI dan MISI terhambat karena kesalahan/tidak kooperatif dari anggota guild?

Jawab : 1. Menanyakan keluhan kepada member tersebut mengapa beliau tidak kooperatif
2. Mencari solusi atau jalan keluar lain yang mengenakkan kedua belah pihak. 
Sama saya simpel sih, kalo mau ya ayo. Kalo ga mau yasudah, saya ga bisa maksa itu hak mereka untuk menolak. Tapi itu tandanya mereka tidak ingin memajukan ds (jika alasannya tidak memuaskan) contohnya "aduh saya males bareng ds, mending sama garuda". Tetapi jika alasannya "saya lagi sibuk real life jadi agak sulit" , saya akan memaklumin tersebut dan menerima hal tersebut. Karena setiap individu memiliki kesibukan dan kepentingannya masing masing. Kita anggota DS ingin memajukan DS, jika ada benalu atau toxic yang merusak kerukunan dan keharmonisan ds, pantasnya kita tanyakan apa alasan mereka tidak suka dan dia maunya gimana di ds. Jika memang dia sudah tidak ingin memajukan ds, maka lebih baik saya mengeluarkan dia daripada menjatuhkan ds dan menghasut member lain. Seperti kasus kasus seperti basudewa dan mas aji


PERTANYAAN 5.
jiwa dari komunitas adalah orang2nya.
jika orang2nya baik maka jiwa organisasipun akan baik, begitupun sebaliknya.

bagaimana cara anda mengatur sekumpulan orang2 yg berbeda2 di guild ini?
dan bagaimana tindakan anda jika ada orang yg sulit anda atur?


Jawab : Yaa saya ga berhak mengatur mereka tetapi dalam guild ada aturannya. Dan aturan harus di tegakkan. Jika ada yang melanggar ya dikasih konsekuensi namun aturan tersebut bersifat general contoh dilarsng toxic, menyebarkan gambar pornografi, sara dan ujaran kebencian. Tetapi diluar dari itu misalnya membahas hobi yang tidak melawan dari aturan diatas, contoh membahas game lain, membahas anime atau movie atau film atau kartun, di sah sah kan saja asal tidak menghina orang lain. Jadi ya dengan adanya aturan yang diterima publik, jika seseorang tidak menerima aturan tersebut? Maka harus kita pertanyakan mengapa dia menolak dan apa saran dan masukkan dari dia. Kita harus jadi terbuka jangan diam diam ntar ngehasut yang lain untuk membenci dan keluar dari guild. Semua tindakan itu ada sebab dan akibat. #Piem2021

`.trim(), m)
}
handler.help = ['piem']
handler.tags = ['']
handler.command = /^(piem)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

