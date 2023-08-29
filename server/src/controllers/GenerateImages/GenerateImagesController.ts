import { Request, Response } from "express";
import { GenerateDalleImage } from "../../providers/openai/GenerateDalleImage";
import { S3StorageProvider } from "../../providers/s3/S3StorageProvider";

export class GenerateImagesController {
    constructor(){}
    async handle(req: Request, res: Response) {
        const {prompt, n} = req.body
        const generateDalleImage = new GenerateDalleImage()
        const generated = generateDalleImage.generateImages(prompt, n)
        return res.send(generated)
    }
}