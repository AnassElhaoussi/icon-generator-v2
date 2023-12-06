import express from "express";
import cors from "cors";
import CreateUser from "./src/controllers/CreateUser/createUser.js";
import { GenerateImagesCtl } from "./src/controllers/GenerateImages/GenerateImagesCtl.js";
import { GetGenerationsCtl } from "./src/controllers/GetGenerations/GetGenerationsCtl.js";
import GetCredits from "./src/controllers/GetCredits/get-credits.js";
import { prisma } from "./src/util/prisma.js";
import { createOrder, captureOrder } from "./src/providers/paypal/paypal-apis.js";
import dotenv from "dotenv";
const app = express();
const PORT = 8000;
const generateImagesController = new GenerateImagesCtl();
const getGenerationsController = new GetGenerationsCtl();
dotenv.config();
app.use(cors());
app.use(express.json());
app.get("/api", (req, res) => res.send("Welcome to IconizeAI API"))
// For creating users
app.post("/api/createuser", CreateUser);
// For generating images and saving them on the db
app.post("/api/generate", generateImagesController.handle);
app.get("/api/get-generations", getGenerationsController.get);
// For getting user's unique credits from the db
app.get("/api/get-credits", GetCredits);
app.patch("/api/update-credits", async (req, res) => {
    const { id } = req.query;
    console.log("hello");
    const { amount: prev_amount } = (await prisma.credits.findUnique({
        where: { userId: id },
    }));
    const updatedCredit = await prisma.credits.update({
        where: {
            userId: id,
        },
        data: {
            amount: prev_amount - 1,
        },
    });
    res.status(201).send(updatedCredit);
});
app.post("/api/my-server/create-paypal-order", async (req, res) => {
    try {
        const order = await createOrder(req.body);
        res.json(order);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
app.post("/api/my-server/capture-paypal-order", async (req, res) => {
    const { orderId, userId, creditsAmount, prevCreditsAmt } = req.body;
    try {
        const captureData = await captureOrder(orderId, userId, creditsAmount, prevCreditsAmt);
        res.json(captureData);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sVUFBVSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3ZGLE9BQU8sVUFBVSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDekQsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFFekQsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLHFCQUFxQjtBQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRXhDLGtEQUFrRDtBQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzRCxHQUFHLENBQUMsR0FBRyxDQUFDLHNC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
