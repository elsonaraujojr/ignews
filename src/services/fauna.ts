import { Client } from "faunadb";

export const faunaClient: Client = new Client({
  secret: process.env.FAUNA_SECRET_KEY,
  // domain: process.env.FAUNA_DOMAIN,
});