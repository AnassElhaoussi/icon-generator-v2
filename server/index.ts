import express from "express"
import cors from "cors"
import CreateUser from "./src/controllers/CreateUser/createUser"
import { GenerateImagesCtl } from "./src/controllers/GenerateImages/GenerateImagesCtl"
import { GetGenerationsCtl } from "./src/controllers/GetGenerations/GetGenerationsCtl"

const app = express()
const PORT = 8000
const generateImagesController = new GenerateImagesCtl()
const getGenerationsController = new GetGenerationsCtl()

app.use(cors())
app.use(express.json())

// For creating users
app.post("/api/createuser", CreateUser)

// For generating images and saving them on the db
app.post("/api/generate", generateImagesController.handle)

app.get("/api/get-generations", getGenerationsController.get)

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})