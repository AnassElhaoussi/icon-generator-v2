import { Request, Response } from "express";
import fetch from "node-fetch";
import { IUserObject } from "./IUserObject";
import {prisma} from "../../util/prisma"

export const createUser = async (req: Request, res: Response) => {
    const { access_token } = req.body;
    try {
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
                Accept: "application/json",
                Authorizartion: `Bearer ${access_token}`,
            },
        }
        );

        const { id, email, verified_email, name, given_name, picture } = await response.json() as IUserObject

        await prisma.user.create({
            data: {
                id,
                email,
                verified_email,
                name,
                given_name,
                picture,
            },
        });
        res.status(200).send({
            status: 200,
            message: "user created"
        })
    } catch (e) {
        console.log(e)
    }
};