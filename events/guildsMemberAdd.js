module.exports = member => {
  let guild = member.guild;
    let RoleToAdd = guild.roles.find("name", "Joueur");
client.on("guildMemberAdd", member => {
  member.addRole(RoleToAdd);
  });
