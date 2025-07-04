import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authMiddleware =(role) => async(req, res, next) =>
{
    try 
    {
        const token = req.headers.authorization?.toString().split(' ')[1];

        if(!token)throw new Error("Token not found");
        
        try {
            const decoded = jwt.verify(token, process.env.secreatekey);
            if(role !== decoded.roleName)throw new Error("Unauthorized api");
            req.user = decoded;
            next();
        } catch(err) {
            if(err instanceof jwt.TokenExpiredError) {
                throw new Error("Token has expired");
            }
            throw err;
        }
    }
    catch(error)
    {
        next(error);
    }
}