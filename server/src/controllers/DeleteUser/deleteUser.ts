import { prisma } from "../../util/prisma"
import { Request, Response } from "express"
import { IReqQuery } from "./IReqQuery"

export const deleteUser = async (req: Request, res: Response) => {
    const { id, email } = req.query
    try {
        await prisma.user.delete({
            where: {
                id,
                email
            } as IReqQuery
        })
        res.status(200).send({
            status: 200,
            message: "User Deleted!"
        })
    } catch (e) {
        res.send({
            response: "error",
            error: e
        })
    }
}