import { Client, Account, ID, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") 
  .setProject("69184a1600346119176c");             

export const account = new Account(client);
export const databases = new Databases(client);
export { ID };
