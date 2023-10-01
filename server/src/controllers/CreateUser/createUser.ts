import { Request, Response } from "express";
import fetch from "node-fetch";
import { IUserObject } from "./IUserObject";
import {prisma} from "../../util/prisma"
import * as fs from "fs"

export default async function (req: Request, res: Response) {
    const { access_token } = req.body
    const emailsRecordFilePath = "../../emails.json"
    let loggedEmails = []

    if(fs.existsSync(emailsRecordFilePath)) {
        loggedEmails = JSON
        .parse(
            fs.readFileSync(
                emailsRecordFilePath,
                "utf-8"
            )
        )
        console.log(loggedEmails)
    }

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

        // Adding the new email to the array and saving the new array in the file
        email && loggedEmails.push(email)
        fs.writeFileSync(
            emailsRecordFilePath,
            JSON.stringify(loggedEmails),
            "utf-8"
        )

        // Getting unique user email records from the logged emails array
        const uniqueUserEmailRecord = loggedEmails.filter(
            (savedEmail: string) => savedEmail === email 
        )

        try {
            const user = await prisma.$transaction(
                async (prisma) => {
                    const user = await prisma
                    .user
                    .create({
                        data: {
                            id,
                            email,
                            verified_email,
                            name,
                            given_name,
                            picture
                        }
                    })
                    
                    
                    uniqueUserEmailRecord.length === 1
                    ? await prisma
                    .credits
                    .create({
                        data: {
                            amount: 3,
                            userId: user.id
                        }
                    })
                    : await prisma
                    .credits
                    .update({
                        where: {userId: ""},
                        data: {userId: user.id}
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