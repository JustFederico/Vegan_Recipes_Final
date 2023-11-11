import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();


// Registration API endpoint
// through the body of req we want send in obj containing username a passw
// http://localhost:3003/auth/register-we can send a post req in Postman since we alr created a coll in compass/in db
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json({message: "User already exists!!!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10) // create pssword that is hashed

    const newUser = new UserModel ({ username, password: hashedPassword });
    await newUser.save();

    res.json({message: "User registered Successfully!!!" });
});


// login..token represents log in session.involves jsonwebtoken...login--token repr loginsession..send it to FE-In FE We check if rignl User was the one that logge in
// req if they are athenticated users
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.json({message: "User does not exist"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json({message: "Incorrect Password or Username"});
    }

    const token = jwt.sign({ id: user._id }, "secret" );
    res.json({ token, userID: user._id });

});

export { router as userRouter };

    
// "username": "Nuria",
// "password": "Federico123" Thats our newly registered user Nuria