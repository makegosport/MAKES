// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { oakCors } from "https://deno.land/x/cors@v1.2.2/oakCors.ts";
import { Application, Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const botToken = Deno.env.get("DISCORD_BOT_TOKEN")!;
const guildId = Deno.env.get("DISCORD_GUILD_ID")!; // Server ID
const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

const router = new Router();
router

  .options("/discord/verify-member", oakCors(corsOptions))
  .post("/discord/verify-member", oakCors(corsOptions), async (ctx) => {
    try {
      const result = ctx.request.body({ type: "json", limit: 0 });
      console.log("REQ HEADERS: ", ctx.request.headers);
      const body = await result.value;
      const { userId } = body;

      // getAuthDetails(botToken);
      const guildMember = await getMember(botToken, userId);

      ctx.response.body = { member: guildMember };
      console.log("MEMBER: ", ctx.response.body);
      ctx.response.status = 200; // OK
    } catch (error) {
      console.error(error);
      ctx.response.body = "Internal server error";
      ctx.response.status = 500; // Internal Server Error
    }
  });

const app = new Application();
app.use(router.routes());
await app.listen({ port: 8000 });

async function getMember(token: string, userId: string) {
  const response = await fetch(
    `https://discord.com/api/guilds/${guildId}/members/${userId}`,
    {
      headers: {
        ContentType: "application/json",
        Authorization: `Bot ${token}`,
      },
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else if (response.status === 404) {
    return null; // Member not found
  } else {
    throw new Error(`Failed to retrieve member: ${response.statusText}`);
  }
}

// VERIFY TOKEN
// async function getAuthDetails(token: string) {
//   console.log("token: ", botToken);
//   const response = await fetch(
//     `https://discord.com/api/oauth2/applications/@me`,
//     {
//       headers: {
//         Authorization: `Bot ${token}`,
//       },
//     }
//   );
//   const data = await response.json();
//   console.log("AUTH DATA: ", data);
//   if (response.ok) {
//     return data;
//   } else {
//     throw new Error(`Failed to retrieve auth details: ${response.statusText}`);
//   }
// }
