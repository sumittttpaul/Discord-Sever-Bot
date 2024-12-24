module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `هنا نتائج البحث الخاصة بك عن ${query}` },
            footer: { text: 'Bot by Shuruhatik' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
            console.log("search Ready")
};