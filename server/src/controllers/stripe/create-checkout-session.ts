import { Request, Response } from "express"
import Stripe from "stripe"
import {PrismaClient} from "@prisma/client"

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
    apiVersion: "2023-08-16"
})

export default async function CreateCheckoutSession(req: Request, res: Response) {
    const prisma = new PrismaClient()

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: "",
                quantity: 1,
            }
        ],
        mode: "payment",
        success_url: "http://localhost:4173/dashboard?success=true",
        cancel_url: "http://localhost:4173/dashboard?cancel=true"
    })

    res.redirect(303, session.url as string)

}