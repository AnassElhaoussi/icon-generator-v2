import {S3} from "aws-sdk"
import sharp from "sharp"
import {v4 as uuidv4} from "uuid"
import fetch from "node-fetch"
import { IS3StorageProvider } from "./IS3StorageProvider"

export class S3StorageProvider implements IS3StorageProvider {
    private client: S3
    constructor() {
        this.client = new S3({
            region: process.env.AWS_S3_REGION
        })
    }

    async save(url: string){
        // Sets a random uuid string
        const id = uuidv4()
        // Fetches the url of the image returned by dalle sdk
        const res = await fetch(url)
        // Converts the response to an array buffer which is a binary representation
        const blob = await res.arrayBuffer()
        // Converts the image into the webp format and then back to a buffer object
        const webpImg = await sharp(blob).webp().toBuffer()

        // Uploads the image in the s3 bucket
        await this.client.upload({
            Bucket: process.env.AWS_S3_BUCKET as string,
            Key: id,
            ACL: "public-read",
            ContentType: "image/webp",
            Body: webpImg
        }).promise()

        // Gets the public url of the image and returns it
        const publicImageURL = `${process.env.AWS_S3_PUBLIC_URL}${id}`
        return publicImageURL
    }
    
}