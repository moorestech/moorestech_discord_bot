import { Client } from "discord.js";
import { registerReadyHandler } from "./ready";
import { registerInteractionCreateHandler } from "./interactionCreate";
import { registerThreadCreateHandler } from "./threadCreate";
import { registerGuildMemberAddHandler } from "./guildMemberAdd";
import { registerMessageCreateHandler } from "./messageCreate";

export function registerEventHandlers(client: Client): void {
  registerReadyHandler(client);
  registerInteractionCreateHandler(client);
  registerThreadCreateHandler(client);
  registerGuildMemberAddHandler(client);
  registerMessageCreateHandler(client);
  console.log("All event handlers registered");
}
