import {OpenAI} from "openai"
import { IGenerateDalleImage } from "./IGenerateDalleImage"

export class GenerateDalleImage implements IGenerateDalleImage {
    private client: OpenAI
    constructor() {
        this.client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })
    }

    async generateImages(prompt: string, n: number) {
        // Calling OpenAI Images API and generating images
        const result = await this.client.images.generate({
            model: "dall-e-3",
            prompt,
            n,
            size: "1024x1024",
            response_format: "url",
        })

        const images = result.data
        if(!images) throw new Error("Something went wrong!", images)
        return images
    }
}