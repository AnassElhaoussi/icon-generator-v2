import express from "express"
import cors from "cors"
import CreateUser from "./src/controllers/CreateUser/createUser"
import DeleteUser from "./src/controllers/DeleteUser/deleteUser"
import { GenerateImagesController } from "./src/controllers/GenerateImages/GenerateImagesController"

const app = express()
const PORT = 8000
const generateImagesController = new GenerateImagesController()

app.use(cors())
app.use(express.json())

// For creating and deleting users
app.post("/api/createuser", CreateUser)
app.delete("/api/deleteuser", DeleteUser)

// For generating images and saving them on the db
app.post("/api/generate", generateImagesController.handle)


app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})