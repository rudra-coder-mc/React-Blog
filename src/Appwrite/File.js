import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class FileServices {
  client = new Client();
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(File) {
    // console.log(File);
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        File
      );
    } catch (error) {
      console.log("AppWrite :: createFile :: error  ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const fileServices = new FileServices();

export default fileServices;
