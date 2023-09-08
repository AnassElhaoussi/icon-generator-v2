import { Request, Response } from "express";
import fetch from "node-fetch";
import { IUserObject } from "./IUserObject";
import { prisma } from "../../util/prisma"


export default async function (req: Request, res: Response) {
    const { access_token } = req.body;
    try {
        // Getting the user object with his unique access token
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
                Accept: "application/json",
                Authorizartion: `Bearer ${access_token}`,
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
        try {
            // Adds user data to the database
            const createdUser = await prisma.user.create({
                data: {
                    id,
                    email,
                    verified_email,
                    name,
                    given_name,
                    picture
                },
            });
            res.status(200).send({
                status: 200,
                message: `User Created : ${createdUser}`
            })
        } catch (e) {
            res.status(e.code).send(e.message)
        }

    } catch (e) {
        res.status(e.code).send(e.message)
    }
};