let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    

        fetch('https://drive.google.com/file/d/1NPfL14PZiGzFC4zFRhBZTi2hihDGk91x/view')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', 'Dasar wibu', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Ada yang Error cuy...', m)
            })
    

}

handler.help = ['caled']
handler.tags = ['']
handler.command = /^(caled)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
