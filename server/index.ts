import express from "express"
import cors from "cors"
import CreateUser from "./src/controllers/CreateUser/createUser"
import DeleteUser from "./src/controllers/DeleteUser/deleteUser"
import { GenerateImagesController } from "./src/controllers/GenerateImages/GenerateImagesController"
import sessions from "express-session"
import cookieParser from "cookie-parser"


const app = express()
const PORT = 8000
const generateImagesController = new GenerateImagesController()

declare module "express-session" {
    interface SessionData {
      emails: string[];
    }
}

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(sessions({
    secret: process.env.SESSION_SECRET_KEY as string,
    saveUninitialized: true,
    resave: true
}))

// For creating and deleting users
app.post("/api/createuser", CreateUser)
app.delete("/api/deleteuser", DeleteUser)

// For generating images and saving them on the db
app.post("/api/generate", generateImagesController.handle)

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})