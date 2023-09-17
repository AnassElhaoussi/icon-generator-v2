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

    if(emails.length === 0) req.session.emails = []
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

        // Destructuring properties from the object
        const {
            id,
            email,
            verified_email,
            name,
            given_name,
            picture
        } = await response.json() as IUserObject

        req.session && (req.session.emails = [...emails, email])

        try {
            await prisma
            .$transaction(
                async (tx) => {
                // Adds user data to the database
                const user = await prisma.user.create({
                    data: {
                        id,
                        email,
                        verified_email,
                        name,
                        given_name,
                        picture
                    }
                });
                console.log(req.session?.emails)
                const filteredEmails = req.session
                ?.emails.filter(
                    (email: string) => email === user.email
                )
                if(
                    filteredEmails.length === 1
                ) {
                    await tx.credits
                    .create({
                        data: {
                            amount: 10
                        }
                    })
                }
            })

            res
            .status(200)
            .send({
                status: 200,
                message: `User Created successfully`
            })
        } catch (e) {
            res.send(e.message)
        }

    } catch (e) {
        res.send(e.message)
    }
};