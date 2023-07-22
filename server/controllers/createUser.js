import fetch from "node-fetch"
import { PrismaClient } from "@prisma/client"
export const createUser = async(req, res) => {
    const prisma = new PrismaClient()
    const { access_token } = req.body
    try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
                "Accept": "application/json",
                "Authorizartion": `Bearer ${access_token}`
            }
        })

        const { id, email, verified_email, name, given_name, picture } = await response.json()
        if (res.error) {
            const { error } = data
            res.status(error.code).send(error.message)
        }
        await prisma.user.create({
            data: {
                id,
                email,
                verified_email,
                name,
                given_name,
                picture
            }
        })
    } catch (e) {
        throw new Error(e)
    }
}