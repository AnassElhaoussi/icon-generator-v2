import express from "express"
import cors from "cors"
import { createUser } from "./controllers/createUser.js"
import { deleteUser } from "./controllers/deleteUser.js"
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())
const PORT = 8000

app.post("/api/createuser", createUser)
app.delete("/api/deleteuser", deleteUser)

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})