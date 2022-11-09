import express, {Express} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import {router as userRouter} from "./routes/user";
import path from "path";

const app: Express = express();
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug')
app.use('/users', userRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});