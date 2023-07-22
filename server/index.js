import express from "express"
import cors from "cors"
import { createUser } from "./controllers/createUser.js"


const app = express()
app.use(cors())
app.use(express.json())
const PORT = 8000

app.post("/createuser", createUser)

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})