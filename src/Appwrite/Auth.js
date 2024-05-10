import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthServices {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call anthor method
        return await this.Login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite serive :: createAccount :: error", error);
      throw error;
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite serive :: Login :: error", error);
      throw error;
    }
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
  }
}

const authServices = new AuthServices();

export default authServices;
