/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['22770458358','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9lY161Ri5KZeIjhhAERUv2OJtYx9KKbAECqgqFZzw3zewu6fnYXe2960qoU6ezHMyfwCSY4YmqAbGD1BQfIUcNUdeFwgYwLpEEaKgDULIITDAcQTXUnm1loSos8nC2g+yAu6jKl21EKe9y83vTtWblaDB7gU82qC4HFJ8/A2gLLt95XobKl6kkducTrsF9G22nWeJTtI+d6WBejqRUbH2X8CjQYSYYhIPihPKEIXpBNULiOnX6CdDM9mijNnDJbKWmb5WZCvru3ZnFo60SapEx8kxFEVvnXyRvskrkcmVD4Oblh7Erhqv9FkvqM87c4FXYtka1vo4musBeafPcExQOAoR4ZjXX+479nwlk938ssd1RU+HexGvpdewPDi5ztkw6GgrYt5HjpcEXyOuZkv/eLXqOurMKle1MhiVgaXe1eheTxi2nNd7pWznl+U9/pX4gn54Jfk/fb9Ney7hQzPYMZr09dJig/lsfq7ma1SSsaD3g/2uj6aeu/G/Rt/1pSm7JL2u0l8Hjny628fVsD5EPWGSeJtNR+4XuXXp7vVs+kkf8gv9HUtNsh3Hk+CeCfhmzwbdOh/MadJb0Lg6COYGnm7q0veT683rdWhxXp/CIVXDYhHiMbuseTZ3z5G7va6kA9HEPI9H5TmOX54VJagehcAQH21AUYwZp5DjnDQxTW8DGF5f0ZEi/uwuaF0rDZWDnBB3X3bzAbrnkar5yzJgh1Aqd5MCmnLaKVrb/AW0QUHzI2IMhS5mPKf1FDEGY8SA8edfbUBQxd90a7LJYhtEmDIekEuR5jD8EPXjIzwe8wvhrzU52s0BUWAIn2HEOSYxa9p4IZAeT/iK7BPkDBgRTBn6WSCiKAQGpxf0c2jtPGz6rjhLdbsf9EAbZE89cAgMIEmqKihdTe5qhv6dfbs1oLAovhHEQRsQmD01Q+QPM8WgDdLnK1lSZEVQ9J4iaIKhf2+ij59sG/AQcYhTBgxgL7yqs9CGgxlUY6YMh+YoNu3YBJ/VfbjkTQZvXm4g1uQqvopwF0h857em28RpIcxcgfLAwwG8lUQxk5d/AAEG6IiDFupjfxJMtcoJfacSXqeoGjkjh3pXKKy2XTo6p5NMOsrSiZ7IeBpo/b6r9SteDWnFe/YoFbSOqfGEl7Kf7W9p33xpsoXoio/o12S+QlXcractu+/a+4G3qY4nm3onGHq245XLMy20oLtWiC66osPD3dbbdWzR5NtxKC/Hlmbte6oYdHa2GfOzHaaCcItvb/59zk/6vrfw01qNbs01wui5Bt4V+g8d32g3ZhMe7V8Q3tfKv4ym9Xov0yy/zrSdp28yZ0Y3g8XZ6VoRyamlT9S1raRDNila5hg8Hn+1QZFCHuU0AwZg2QGCNqD5pbHuiET5bzLZZjwy43jWFJ1Cxs3PcVjhDDEOswIYoqoqkiwKgvz214LmhQvZqXFkvAjGCXj8DaLMAr1bBwAA
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
