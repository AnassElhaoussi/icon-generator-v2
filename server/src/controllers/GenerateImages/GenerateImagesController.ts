import { Request, Response } from "express";
import { GenerateDalleImage } from "../../providers/openai/GenerateDalleImage";
import { S3StorageProvider } from "../../providers/s3/S3StorageProvider";

export class GenerateImagesController {
    constructor(){}
    async handle(req: Request, res: Response) {
        // Getting the prompt and the number of images from the request body
        const {prompt, n} = req.body
        // Calling the class and the method that generates dalle images
        const generateDalleImage = new GenerateDalleImage()
        const generatedImages = await generateDalleImage.generateImages(prompt, n)
        // Sending a 200 status message to the client
        res.status(201).send(generatedImages)
    }
}