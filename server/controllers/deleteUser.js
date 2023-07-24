import { PrismaClient } from "@prisma/client"
export const deleteUser = async(req, res) => {
    const prisma = new PrismaClient()
    const { id } = req.body
    try {
        await prisma.user.delete({ where: id })
    } catch (e) {
        throw new Error(e)
    }
}