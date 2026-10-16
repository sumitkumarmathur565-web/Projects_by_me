import express from 'express'
const app = express();
import userRouter from "./routes/auth.route.js";
import CookieParser from "cookie-parser";
import messageRouter from "./routes/message.route.js";
import cors from "cors";

app.use(CookieParser());

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.get("/" , (req ,res) => {
    res.send("HElo");
})



app.use("/api/auth" , userRouter);
app.use("/api/message" , messageRouter);

export default app;