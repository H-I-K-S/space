let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Kamu Mendapatkan +1000 XP\nKarena BOT baru saja update, semua user mendapatkan tambahan +1000 XP dari *mlspacetoon BOT*\n(Claim lagi esok hari yaaツ)', m)  
    global.DATABASE._data.users[m.sender].exp += 2000
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Kamu udahh mengklaim hari inii, ambil lagi besok yaaaaaaa', m)
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

