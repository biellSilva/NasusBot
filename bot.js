const Discord = require("discord.js");
const client = new Discord.Client(); 
const toApng = require("gif-to-apng");
const download = require("download-file");

const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity(`!Nasus para ajuda`);
//client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);
})

//Bot entrou em servidor
client.on("guildCreate", guild => {
  console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

//Bot saiu de Servidor
client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

//Membro entrou
client.on('guildMemberAdd', member => {
var channel = client.channels.get('643307116710461460')
var role = member.guild.roles.get('622789806853849089')
var info = client.channels.get('643279401320185874')
member.addRole(role);

embed = {
  "author": {
    "name": "Beco dos Catiorros"
  },
  "description": "*Relatório*",
  "color": 33031,
  "footer": {
   "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
   "text": "© BECO DOS CATIORROS | 2019 - 2020"
  },
  "thumbnail": {
   "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
  },
  "fields": [
   {
     "name": "**Entrada**",
     "value": `Usuário ${member} entrou no servidor\nNão esqueça de ler as ${info} do servidor\nLhe foi atribuido o cargo ${role}`,
   },
  ],
};
  channel.send({ embed });
});

//Membro saiu
client.on('guildMemberRemove', member => {
var channel = client.channels.get('643307116710461460')
  
  embed = {
    "author": {
      "name": "Beco dos Catiorros"
    },
    "description": "*Relatório*",
    "color": 8454144,
    "footer": {
     "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
     "text": "© BECO DOS CATIORROS | 2019 - 2020"
    },
    "thumbnail": {
     "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
    },
    "fields": [
     {
       "name": "**Saída**",
       "value": `Usuário ${member} saiu do servidor`
     }
    ]
  };
    channel.send({ embed });
});


//REACTION ROLE LANES
client.on('raw', async dados => { 

  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != '643586866058231808') return

  let servidor = client.guilds.get('622572226759360513')
  let membro = servidor.members.get(dados.d.user_id)


  //CARGOS
  let top = servidor.roles.get('622865588527824897'),
      jg = servidor.roles.get('622870013308567552'),
      mid = servidor.roles.get('622870070233661462'),   //Cargos Lane
      adc = servidor.roles.get('622870122557734912'),
      sup = servidor.roles.get('622870190853718026')

  //Add Cargo
  if(dados.t === "MESSAGE_REACTION_ADD"){
      if(dados.d.emoji.id === "642496317003792385"){
        if(membro.roles.has(top)) return
        membro.addRole(top)
      }else if(dados.d.emoji.name === "🌲"){
        if(membro.roles.has(jg)) return
        membro.addRole(jg)
      }else if(dados.d.emoji.name === "👤"){
        if(membro.roles.has(mid)) return
        membro.addRole(mid)
      }else if(dados.d.emoji.name === "💩"){
        if(membro.roles.has(adc)) return
        membro.addRole(adc)
      }else if(dados.d.emoji.name === "🐸"){
        if(membro.roles.has(sup)) return
        membro.addRole(sup)
      }
  }
  //Remove Cargo
  if(dados.t === "MESSAGE_REACTION_REMOVE"){
    if(dados.d.emoji.id === "642496317003792385"){
      if(membro.roles.has(top)) return
      membro.removeRole(top)
    }else if(dados.d.emoji.name === "🌲"){
      if(membro.roles.has(jg)) return
      membro.removeRole(jg)
    }else if(dados.d.emoji.name === "👤"){
      if(membro.roles.has(mid)) return
      membro.removeRole(mid)
    }else if(dados.d.emoji.name === "💩"){
      if(membro.roles.has(adc)) return
      membro.removeRole(adc)
    }else if(dados.d.emoji.name === "🐸"){
      if(membro.roles.has(sup)) return
      membro.removeRole(sup)
    }
}

});

//REACTION ROLE ELOS
client.on('raw', async dados => {

  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != '643586883376381966') return

  let servidor = client.guilds.get('622572226759360513')
  let membro = servidor.members.get(dados.d.user_id)


  //CARGOS
  let desa = servidor.roles.get('622864318488248350'),
      gm = servidor.roles.get('622864420699373568'),
      mestre = servidor.roles.get('622864593253040148'),
      dima = servidor.roles.get('622864629420523541'),
      plat = servidor.roles.get('622864849516625920'),      //Elos
      ouro = servidor.roles.get('622865091913580547'),
      prata = servidor.roles.get('622865247190908969'),
      bronze = servidor.roles.get('622865327046393858'),
      ferro = servidor.roles.get('622865469573169163')

  //Add Elo
  if(dados.t === "MESSAGE_REACTION_ADD"){
      if(dados.d.emoji.name === "😀"){
        if(membro.roles.has(desa)) return
        membro.addRole(desa)
      }else if(dados.d.emoji.name === "😁"){
        if(membro.roles.has(gm)) return
        membro.addRole(gm)
      }else if(dados.d.emoji.name === "😆"){
        if(membro.roles.has(mestre)) return
        membro.addRole(mestre)
      }else if(dados.d.emoji.name === "😎"){
        if(membro.roles.has(dima)) return
        membro.addRole(dima)
      }else if(dados.d.emoji.name === "😒"){
        if(membro.roles.has(plat)) return
        membro.addRole(plat)
      }else if(dados.d.emoji.name === "😏"){
        if(membro.roles.has(ouro)) return
        membro.addRole(ouro)
      }else if(dados.d.emoji.name === "😕"){
        if(membro.roles.has(prata)) return
        membro.addRole(prata)
      }else if(dados.d.emoji.name === "😩"){
        if(membro.roles.has(bronze)) return
        membro.addRole(bronze)
      }else if(dados.d.emoji.id === "642496600442404879"){
        if(membro.roles.has(ferro)) return
        membro.addRole(ferro)
      }
  }
  //Remove Elo
  if(dados.t === "MESSAGE_REACTION_REMOVE"){
    if(dados.d.emoji.name === "😀"){
      if(membro.roles.has(desa)) return
      membro.removeRole(desa)
    }else if(dados.d.emoji.name === "😁"){
      if(membro.roles.has(gm)) return
      membro.removeRole(gm)
    }else if(dados.d.emoji.name === "😆"){
      if(membro.roles.has(mestre)) return
      membro.removeRole(mestre)
    }else if(dados.d.emoji.name === "😎"){
      if(membro.roles.has(dima)) return
      membro.removeRole(dima)
    }else if(dados.d.emoji.name === "😒"){
      if(membro.roles.has(plat)) return
      membro.removeRole(plat)
    }else if(dados.d.emoji.name === "😏"){
      if(membro.roles.has(ouro)) return
      membro.removeRole(ouro)
    }else if(dados.d.emoji.name === "😕"){
      if(membro.roles.has(prata)) return
      membro.removeRole(prata)
    }else if(dados.d.emoji.name === "😩"){
      if(membro.roles.has(bronze)) return
      membro.removeRole(bronze)
    }else if(dados.d.emoji.id === "642496600442404879"){
      if(membro.roles.has(ferro)) return
      membro.removeRole(ferro)
    }
}

});

//Bloco de Comandos
client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  //if(!message.content.startsWith(prefix));


  const args = message.content.slice().trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  // comando ping
  if(comando === config.prefix+"ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }

  //comando falar
  if(comando === config.prefix+"say") { 

    if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");

    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
    }

  //comando falar dm (incompleto)
  if(comando === config.prefix+"sayd") { 

    if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");

    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }

  //comando apagar
  if(comando === config.prefix+"clear") {
    if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
  }

  // comando chutar 
  if(comando === config.prefix+"kick") {
    if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Por favor mencione um membro válido deste servidor");
    if(!member.kickable) 
      return message.reply(`Eu não posso expulsar ${member.user.tag}! Ele pode ter um cargo mais alto.`);

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";

    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
      
      var channel = client.channels.get('643307116710461460');

      embed = {
        "title": "Beco dos Catiorros",
        "description": "*Relatório*",
        "color": "8454144",

        "footer": {
            "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
            "text": "© BECO DOS CATIORROS | 2019 - 2020"
        },

        "thumbnail": {
            "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
          },
        "fields": [{
              "name": "Expulsão",
              "value": `${member.user.tag} foi chutado por ${message.author.tag}\nMotivo: ${reason}.`
            }]
        }
        channel.send({ embed });
    
      // message.reply(`${member.user.tag} foi kickado por ${message.author.tag} Motivo: ${reason}`);

  }

  // comando ban
  if(comando === config.prefix+"ban") {
    if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor mencione um membro válido deste servidor");
    if(!member.bannable) 
      return message.reply(`Eu não posso banir ${member.user.tag}! Ele pode ter um cargo mais alto.`);
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o : ${error}`));

    var channel = client.channels.get('643307116710461460');

      embed = {
        "title": "Beco dos Catiorros",
        "description": "*Relatório*",
        "color": "8454144",

        "footer": {
            "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
            "text": "© BECO DOS CATIORROS | 2019 - 2020"
        },

        "thumbnail": {
            "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
          },
        "fields": [{
              "name": "Banimento",
              "value": `${member.user.tag} foi banido por ${message.author.tag}\nMotivo: ${reason}.`
            }]
        }
        channel.send({ embed });
    // message.reply(`${member.user.tag} foi banido por ${message.author.tag} Motivo: ${reason}`);
  }

  //comando Nasus (ajuda)
  if(comando === config.prefix+"nasus") {

    const  embed = {
      "color": 16312092,
      "author": {
        "name": "Beco dos Catiorros",
      },
      "description": "\n\n*Janela de Comandos*\n\n",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
        "text": "© BECO DOS CATIORROS | 2019 - 2020"
      },
      "thumbnail": {
        "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
      },
      "fields": [
        {
          "name": "**Comandos**",
          "value": "*Prefix:* **!**\n\n **!nasus** - Painel de comandos\n\n **!ping** - Ping? Pong!\n\n **!say** - Envia uma mensagem personalizada\n\n **!saypm** - Envia uma mensagem personalizada no privado do autor\n\n **!kick** - Expulsa um usuario do servidor\n\n **!ban** - Bane um usuario do servidor"
        }
       ]
    };
    message.channel.send({ embed });
    }

  //comando apng
  if(comando === config.prefix+"apng") {
  if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
  return message.reply("Desculpe, você não tem permissão para usar isto!");
  let info = {filename: "emoji.gif"}  
  let [nome, emojilink] = args
  if(!args[0]) return message.reply("Você esqueceu de definir os argumentos\n !apng <nome> <link.gif>");
  if(!args[1]) return message.channel.send("Você esqueceu de definir o link do emoji\n !apng <nome> <link.gif>");
  
    download(emojilink, info, function(err){
      if (!err)  {
      console.log("gif identificado")
      toApng('emoji.gif')
     .then(() => {
       message.guild.createEmoji('emoji.png', nome)
       message.channel.send("O gif-emoji foi convertido com sucesso e adicionado!")
      })
     .catch(error => console.log('Ocorreu um erro ao criar um emoji-gif', error))
     .catch(error => message.channel.send("Algo deu errado, avise meu criador!"))
      }
      else {
        message.channel.send("Link invalido")
      }
    })
  
  }

  //Embed Rotas
  if(comando === config.prefix+"lanes") {
  if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
  return message.reply("Desculpe, você não tem permissão para usar isto!");

    let servidor = client.guilds.get('622572226759360513')
    let nasus = servidor.emojis.get('642496317003792385')

    let top = servidor.roles.get('622865588527824897'),
        jg = servidor.roles.get('622870013308567552'),
        mid = servidor.roles.get('622870070233661462'),
        adc = servidor.roles.get('622870122557734912'),
        sup = servidor.roles.get('622870190853718026'),

    embed = {
      "author": {
        "name": "Beco dos Catiorros"
      },
      "description": "*Cargos por Reações*",
      "color": 16312092,
      "footer": {
       "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
       "text": "© BECO DOS CATIORROS | 2019 - 2020"
      },
      "thumbnail": {
       "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
      },
      "fields": [
       {
         "name": "**Escolha de Rotas**",
         "value": `${nasus} - ${top}\n:evergreen_tree: - ${jg}\n:bust_in_silhouette: - ${mid}\n:poop: - ${adc}\n:frog: - ${sup}\n\nEm caso de erros clique novamente!`
       }
      ]
    }
     message.channel.send({ embed })
  }

  //Embed Elos
  if(comando === config.prefix+"elos") {
  if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
  return message.reply("Desculpe, você não tem permissão para usar isto!");

     let servidor = client.guilds.get('622572226759360513')
     let yasuo = servidor.emojis.get('642496600442404879')

      let desa = servidor.roles.get('622864318488248350'),
          gm = servidor.roles.get('622864420699373568'),
          mestre = servidor.roles.get('622864593253040148'),
          dima = servidor.roles.get('622864629420523541'),
          plat = servidor.roles.get('622864849516625920'),
          ouro = servidor.roles.get('622865091913580547'),
          prata = servidor.roles.get('622865247190908969'),
          bronze = servidor.roles.get('622865327046393858'),
          ferro = servidor.roles.get('622865469573169163')

  embed = {
    "author": {
      "name": "Beco dos Catiorros"
    },
    "description": "*Cargos por Reações*",
    "color": 16312092,
    "footer": {
     "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
     "text": "© BECO DOS CATIORROS | 2019 - 2020"
    },
    "thumbnail": {
     "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
    },
    "fields": [
      {
        "name": "Escolha de fila ranqueada",
        "value": `😀 - ${desa}\n\n😁 - ${gm}\n\n😆 - ${mestre}\n\n😎 - ${dima}\n\n😒 - ${plat}\n\n😏 - ${ouro}\n\n😕 - ${prata}\n\n😩 - ${bronze}\n\n${yasuo} - ${ferro}\n\n\nEm caso de erros clique novamente!`
      }
    ]
  };
  message.channel.send({ embed });
  }

  //Embed Mais Infos (off)
  if(comando === config.prefix+"monos") {
    if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const embed = {
      "color": 13875720,
      "timestamp": "2019-11-10T23:22:36.344Z",
      "footer": {
       "text": "Clique nas reaçoes para receber cargos"
      },
      "thumbnail": {
       "url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png"
      },
      "fields": [
        {
          "name": "Cargo por reações",
          "value": "Tabela de Campeões\nEscolha seu mono:\n\n :ok_hand: - Mono Champion\n Nasus\n Darius\n Evelynn\n Lee Sin\n Zed\n Yasuo\n Vayne\n Draven\n Thresh\n Lulu\n\nSe seu campeão nao estiver aqui, procure por um moderador!\n\nCaso queira remover um cargo basta clicar novamente!"
        }
      ]
    };
  message.channel.send({ embed });
  }

  //Embed info
  if(comando === config.prefix+"info") {
    if(!message.member.roles.some(r=>["Admins Nasus", "Moderador", "dev"].includes(r.name)) )
    return message.reply("Desculpe, você não tem permissão para usar isto!");

    let servidor = client.guilds.get('622572226759360513')

    let regras = servidor.channels.get('622573033952903215'),
        anuncios = servidor.channels.get('622573003364106240'),
        comandos = servidor.channels.get('622862853459673098'),
        bots = servidor.channels.get('622865704684879882'),
        tags = servidor.channels.get('642511000708317205'),
        geral = servidor.channels.get('622572226759360517'),
        musicas = servidor.channels.get('642207853121241098'),
        guia = servidor.channels.get('642212053238677504')

    embed = {
      "color": 16312092,
      "author": {
        "name": "Beco dos Catiorros",
      },
      "description": "\n\n*Sala de Informações*\n\n",
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/622572226759360517/642547190367125514/nasus-classic.png",
        "text": "© BECO DOS CATIORROS | 2019 - 2020"
      },
      "thumbnail": {
        "url": "https://i.pinimg.com/474x/29/a6/62/29a662dec6ab225f01d222b03b13c8b6--legends-lag.jpg"
      },
      "fields": [
        {
          "name": "**Salas**",
          "value": `${regras} - para termos um bom convívio\n\n${tags} - Cargos por emojis.\n\n${comandos} - Lista de comandos disponíveis.\n\n${bots} - Sala onde bots fazem spam.\n\n${geral} - Bora conversar para descontrair.\n\n${guia} - Guias de campeões, se liga tem coisa boa ali!\n\n${anuncios} - Sala onde divulgamos nossas streams e vídeos.\n\n${musicas} - Solta o som mano, faça sua playlist!`
        }
       ]
    };
    message.channel.send({ embed })
  }


});

client.login(config.token);