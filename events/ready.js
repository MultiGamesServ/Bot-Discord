const chalk = require('chalk');
const moment = require('moment');
module.exports = client => {
  console.log(chalk.bgWhite.blue(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]\tJe suis Online !\nConnecté en tant que ${client.user.username} [ID ${client.user.id}]\nPresent dans ${client.channels.size} channels et ${client.users.size} utilisateurs en cache!\npresent dans ${client.guilds.size} serveurs !\n`));
};
