const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzE3MDc0NjEyMTM1MDAyMjQz.Xt9dUg.wev50EN5jL5jLA2xjAHPCdWC3hA';

bot.on('ready', () =>{
    console.log('Online!')
})


bot.on("message", message => {
    if (message.author.bot) return;
    let str = message.content;

    //replies dank to any image link, needs to be confined to a channel...
    let modified = str
        .toLowerCase()
        .replace(/ik ben/g, 'ik ben')
        .replace(/[^a-z\.\?\!\, ]/g, '')
        .split(/\.|\?|\!|\,/)
        .map(ik => {
            ik = ' ' + ik
            let start = ik.indexOf(' ik ben ')
            if (start === -1) {
                return
            }
            return ik.substr(start)
        })
        .filter(ik => ik)
        .join(' and ')

    let start
    if (modified) {
        message.channel.send(`Hallo ${modified.substr(start).split(' ik ben ').map(i => i.trim()).filter(i => i).join(' ')}, ik ben papa!`);
    }    
    // if message starts with "!"
    if (str.startsWith("!")) {
        // store the command for cleaner code/reading
        let command = str.substring(1);
        runCommand(command, message, str);
    }
});


bot.login(token)
