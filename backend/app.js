import express from 'express';
import { connectDB } from './config/mongodb.js';
import path from 'path';
import cors from 'cors';
import router from './routers/index.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/api', router);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Server Error" })
})

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
})