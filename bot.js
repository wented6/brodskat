const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"// البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Diamond Codes')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  
  
 
  
  
  
  
  
  });
  
   
 
 
 
 
 
 
 
 
 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('#bc')){
 if (message.author.id !== '252813587188416512') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '252813587188416512') return;
message.channel.sendMessage('تم إرسال الرساله بنجاح |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.login(process.env.BOT_TOKEN);
