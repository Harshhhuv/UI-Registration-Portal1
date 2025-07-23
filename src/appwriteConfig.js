import { Client, Account, ID, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // your Appwrite endpoint
  .setProject("687fc49c000b4520cbc8");             // your project ID

const account = new Account(client);
const databases = new Databases(client); // ✅ add this line

export { client, account, ID, databases }; // ✅ export everything you need
