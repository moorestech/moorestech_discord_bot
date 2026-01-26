import { SlashCommandBuilder } from "discord.js";

export const helpJaCommand = new SlashCommandBuilder()
  .setName("help-ja")
  .setDescription("ボットの使い方を表示します（日本語）");

export const helpEnCommand = new SlashCommandBuilder()
  .setName("help-en")
  .setDescription("Show bot usage (English)");

export const commands = [helpJaCommand, helpEnCommand];
