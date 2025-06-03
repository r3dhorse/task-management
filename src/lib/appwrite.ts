import "server-only";
import { Client, Account, Storage, Users, Databases } from "node-appwrite";

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!);

  return {
    get account() {
      return new Account(client);
    },
  };
}
export async function createClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

  return {
    get account() {
      return new Account(client);
    },
    get storage() {
      return new Storage(client);
    },
    get users() {
      return new Users(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
}
