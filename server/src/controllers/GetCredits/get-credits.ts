import {Request, Response} from "express"
import {prisma} from "../../util/prisma"

export default async function GetCredits(
    req: Request,
    res: Response
) {
    const {id} = req.query
    try {
        // Gets user's unique credits
        const uniqueCredits = await prisma
        .credits
        .findUnique({
            where: {
                userId: id as string
            }
        })
        
        res.status(201).send({
            status: "OK",
            credits: uniqueCredits
        })
    } catch(e){
        throw new Error(e.message)
    }
}