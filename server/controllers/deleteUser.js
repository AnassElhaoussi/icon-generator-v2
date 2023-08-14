import { PrismaClient } from "@prisma/client"
export const deleteUser = async(req, res) => {
    const prisma = new PrismaClient()
    const { id, email } = req.query

    try {
        await prisma.user.delete({
            where: {
                id,
                email
            }
        })
        res.status(200).send({
            status: 200,
            message: "user deleted"
        })
    } catch (e) {
        console.log(e)
    }
}