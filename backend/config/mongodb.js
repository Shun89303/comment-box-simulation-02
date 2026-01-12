import { MongoClient } from 'mongodb';
import { initModels } from '../models/index.js';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {

    const URI = process.env.MONGODB_URI;

    const client = new MongoClient(URI);
    await client.connect();

    initModels(client.db('commentDB'));
    console.log("DB connected");
}