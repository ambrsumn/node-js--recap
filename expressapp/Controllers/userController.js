import { pass } from "three/tsl";
import { User } from "../Models/userModel.js";
import { globalResponse } from "../Utils/globalResponse.js";
import bcrypt from 'bcrypt';
// import { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createUser = async(req, resizeBy, next) =>
{
    try 
    {
        const {firstName, lastName, email, password, roleName} = req.body;
        // console.log(password);
        let hashedPassword = await bcrypt.hash(password, 10);

        console.log("111", hashedPassword);

        const checkUserExists = await User.findOne(
            {where:{
                email: email
            }}) === null ? false : true;

        if(checkUserExists)return globalResponse(req, resizeBy, 400, "User already exists", null);


        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            roleName: roleName
        }
        let savedUser = await User.create(newUser);

        return globalResponse(req, resizeBy, 200, "User created successfully", savedUser);
    }
    catch(error)
    {
        // console.log(error);
        next(error);
    }
}

export const login = async(req, res, next) =>
{
    try 
    {
        const {email, password} = req.body;
        dotenv.config();

        let user = await User.findOne({
            where:{
                email: email
            }
        });

        if(user === null)return globalResponse(req, res, 400, "User does not exist", null);
        // console.log(user.password, hasedPassword);

        // if(hasedPassword !== user.password)throw new Error("Invalid Password");
        let passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch);
        if(!passwordMatch)throw new Error("Invalid Password");

        let token = await jwt.sign({
            email: user.email,
            roleName: user.roleName
        }, process.env.secreatekey, {
            expiresIn: 60
        });

        console.log(token);

        let userData = {
            token: token,
            email: user.email,
            roleName: user.roleName,
            firstName: user.firstName,
            lastName: user.lastName
        }

        return globalResponse(req, res, 200, "User logged in successfully", userData);

    }
    catch(error)
    {
        next(error);
    }
}