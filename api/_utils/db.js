import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.CLUSTER_CONNECTION_STRING;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const db = new MongoClient(connectionString, options);
