import { Client, Interaction } from "discord.js";

export function registerInteractionCreateHandler(client: Client): void {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === "ping") {
      console.log(`Received /ping command from ${interaction.user.tag}`);
      await interaction.reply("pong");
    }
  });
}
