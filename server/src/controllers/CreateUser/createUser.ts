import { Request, Response } from "express";
import fetch from "node-fetch";
import { IUserObject } from "./IUserObject";
import {prisma} from "../../util/prisma"

declare module "express-session" {
    interface Session {
        session: {
            emails: string[]
        }
    }
}
export default async function (req: Request, res: Response) {
    const { access_token } = req.body
    let emails = !req.session?.emails
    ? []
    : req.session?.emails

    try {
        // Getting the user object with his unique access token
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        }
        );

        // Destructuring properties from the user object
        const {
            id,
            email,
            verified_email,
            name,
            given_name,
            picture
        } = await response.json() as IUserObject

        req.session && (req.session.emails = [...emails, email])
        const uniqueEmails = emails.filter(
            (savedEmail: string) => savedEmail === email 
        )
        try {
            const user = await prisma.$transaction(
                async (prisma) => {
                    const user = await prisma.user.create({
                        data: {
                            id,
                            email,
                            verified_email,
                            name,
                            given_name,
                            picture
                        }
                    })
                    await prisma.credits.create({
                        data: {
                            amount: uniqueEmails.length > 1 
                            ? 0 
                            : 3,
                            userId: user.id
                        }
                    })
                    return user
                }
            )
            res.status(200).send({
                status: 200,
                createdUser: user
            })
        } catch (e) {
            throw new Error(e.message)
        }

    } catch (e) {
        throw new Error(e.message)
    }
};