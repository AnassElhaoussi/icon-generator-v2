import express from "express"
import cors from "cors"
import CreateUser from "./src/controllers/CreateUser/createUser"
import { GenerateImagesCtl } from "./src/controllers/GenerateImages/GenerateImagesCtl"
import { GetGenerationsCtl } from "./src/controllers/GetGenerations/GetGenerationsCtl"
import GetCredits from "./src/controllers/GetCredits/get-credits"
import { prisma } from "./src/util/prisma"
import {createOrder, captureOrder} from "./src/providers/paypal/paypal-apis"

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

// For getting user's unique credits from the db
app.get("/api/get-credits", GetCredits)
app.patch("/api/update-credits", async (req, res) => {
    const {id} = req.query
    console.log("hello")
    const {amount: prev_amount} = await prisma.credits.findUnique({
        where: {userId: id as string}
    }) as {amount: number}

    const updatedCredit = await prisma.credits.update({
        where: {
            userId: id as string
        },
        data: {
            amount: prev_amount - 1
        }
    })
    res.status(201).send(updatedCredit)
})  

app.post("/api/my-server/create-paypal-order", async (req, res) => {
    try {
        const order = await createOrder(req.body)
        res.json(order)
    } catch (err){
        res.status(500).send(err.message)
    }
})

app.post("/api/my-server/capture-paypal-order", async (req, res) => {
    const {orderId, userId, creditsAmount, prevCreditsAmt} = req.body
    try {
        const captureData = await captureOrder(
            orderId, 
            userId, 
            creditsAmount, 
            prevCreditsAmt
        )
        res.json(captureData)
    } catch(err) {
        res.status(500).send(err.message)
    }
})

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
})