import { mergeConfig } from "@signe/di";
import { provideRpg, startGame } from "@rpgjs/client";
import startServer from "./server";
import configClient from "./config/config.client";

startGame(
  mergeConfig(configClient, {
    providers: [provideRpg(startServer)],
  })
);