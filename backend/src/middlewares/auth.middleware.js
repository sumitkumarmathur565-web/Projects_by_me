import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    console.log("TOKEN:", token);

    if (!token) {
        return res.status(401).json({
            message: "No token"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("DECODED:", decoded);

        const user = await User.findById(decoded.userId);

        console.log("USER:", user);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("JWT ERROR:", error.message);

        return res.status(401).json({
            message: error.message
        });
    }
}

export default authMiddleware;