import { prisma } from "../../util/prisma"
import { Request, Response } from "express"
import { IReqQuery } from "./IReqQuery"

export default async function (req: Request, res: Response){
    const { id, email } = req.query
    try {
        // Deleting a user with a specifi email and id
        const deletedUser = await prisma.user.delete({
            where: {
                id,
                email
            } as IReqQuery
        })
        res.status(200).send({
            status: 200,
            message: `
                Deleted User: ${deletedUser}
            `
        })
    } catch (e) {
        res.status(e.code).send(e.message)
    }
}