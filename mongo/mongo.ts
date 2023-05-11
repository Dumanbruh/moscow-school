import { MongoClient } from "mongodb";
import { Record } from "./models/record";
import { Setting } from "./models/setting";

const uri = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);
client.connect();
const db = client.db(process.env.DB_NAME || "moscow-school");

export const recordsCol = db.collection<Record>("Records");
export const settingsCol = db.collection<Setting>("Settings");

export { db };
