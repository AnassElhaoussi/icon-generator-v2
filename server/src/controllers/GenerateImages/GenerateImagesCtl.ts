import { Request, Response } from "express";
import { GenerateDalleImage } from "../../providers/openai/GenerateDalleImage";
import { S3StorageProvider } from "../../providers/s3/S3StorageProvider";
import { prisma } from "../../util/prisma";

export class GenerateImagesCtl {
    constructor(){}
    async handle(req: Request, res: Response) {
        // Request body
        const {
            prompt,
            n, 
            email, 
            prevCreditsAmt, 
            creditsId, 
            iconObject, 
            iconDescription, 
            color,
            style
        } = req.body
        // Calling the class and the method that generates dalle images
        const generateDalleImage = new GenerateDalleImage()
        const generatedImages = await generateDalleImage.generateImages(prompt, n)

        const generation = await prisma.$transaction(
            async (prisma) => {                 
                // Adding a prisma child record that includes author data
                const generation = await prisma.generations.create({
                    data: {
                        prompt,
                        n,
                        iconObject,
                        iconDescription,
                        color,
                        style,
                        URLs: generatedImages.map(image => image.url) as string[],
                        authorEmail: email
                    },
                    include: {
                        author: true
                    }
                })

                // Decrementing the amount of credits in the db record for n amount of generations
                await prisma.credits.update({
                    where: {creditsId},
                    data: {amount: prevCreditsAmt - n}
                })

                return generation
            } 
        )
        // Sending a 200 status message to the client
        res.status(201).send(generation)
    }
}