///////////////////////////////////

//💙 Credit Infos 
//💜 This Project Made By Aditya Codez
//💛 Must Give Credits While Using 
//💚 Support Server 
//♥️ https://discord.gg/z6RMrphPXE
//🔥 Youtube 
//🙉 https://youtube.com/adityacodez
//🏘️ ©Aditya Codez™

///////////////////////////////////
module.exports = (client, message) => {

    if (message.author.bot) return;

    const prefix = client.config.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);

};


      ///////////////////////////////////

//💙 Credit Infos 
//💜 This Project Made By Aditya Codez
//💛 Must Give Credits While Using 
//💚 Support Server 
//♥️ https://discord.gg/z6RMrphPXE
//🔥 Youtube 
//🙉 https://youtube.com/adityacodez
//🏘️ ©Aditya Codez™

///////////////////////////////////