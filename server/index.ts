import express from "express"
import cors from "cors"
import {createUser} from "./src/controllers/CreateUser/createUser"
import {deleteUser} from "./src/controllers/DeleteUser/deleteUser"
import { GenerateImagesController } from "./src/controllers/GenerateImages/GenerateImagesController"

const app = express()
const PORT = 8000
const generateImagesController = new GenerateImagesController()

app.use(cors())
app.use(express.json())

app.post("/api/createuser", createUser)
app.delete("/api/deleteuser", deleteUser)

app.post("/api/generate", generateImagesController.handle)

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})