// npm i express cors bcrypt jsonwebtoken mongoose
// npm install nodemon --save-dev
// node .\src\index.js(thats how ucan run it)

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRouter} from './routes/users.js';
import recipeRoutes from './routes/recipeRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// routes
app.use("/auth", userRouter);
app.use('/api', recipeRoutes);

mongoose.connect(
        "mongodb+srv://waspa:9VugLFozf2n3kN9E@cluster0.s3ex7dj.mongodb.net/app_nov"
        );

app.listen(3003, () => console.log("Server Started"));


