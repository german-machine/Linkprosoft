import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { configDotenv } from 'dotenv'
import { connectDB } from './db/connectDB.js'
import authRoutes from "./route/auth/auth-routes.js"
import serverless from "serverless-http";


await connectDB();

const app = express()
configDotenv()
const PORT = process.env.PORT
app.use(cors({
    origin: ['http://localhost:5173', 'https://linkprosoft-beta.vercel.app'],
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
app.options('*', cors());
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)






// Export handler for Vercel
export const handler = serverless(app);
