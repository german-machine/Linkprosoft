import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { configDotenv } from 'dotenv'
import { connectDB } from './db/connectDB.js'
import authRoutes from "./route/auth/auth-routes.js"


const app = express()
configDotenv()
const PORT = process.env.PORT
app.use(cors({
    origin: ["http://linkprosoft-beta.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes)






app.listen(PORT, () => {
    connectDB()
    console.log(`server started on http://localhost:${PORT}`);
})
