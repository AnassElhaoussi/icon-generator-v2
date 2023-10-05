import { Request, Response } from "express";
import { GenerateDalleImage } from "../../providers/openai/GenerateDalleImage";
import { S3StorageProvider } from "../../providers/s3/S3StorageProvider";
import { prisma } from "../../util/prisma";

export class GenerateImagesCtl {
    constructor(){}
    async handle(req: Request, res: Response) {
        // Getting the prompt and the number of images from the request body
        const {prompt, n, email} = req.body
        // Calling the class and the method that generates dalle images
        const generateDalleImage = new GenerateDalleImage()
        const generatedImages = await generateDalleImage.generateImages(prompt, n)

        // Adding a prisma child record that includes author data
        const generation = await prisma.generations.create({
            data: {
                prompt,
                n,
                URLs: generatedImages.map(image => image.url) as string[],
                authorEmail: email
            },
            include: {
                author: true
            }
        })
        // Sending a 200 status message to the client
        res.status(201).send(generation)
    }
}