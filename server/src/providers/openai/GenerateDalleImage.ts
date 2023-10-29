import { Configuration, OpenAIApi } from "openai"
import { IGenerateDalleImage } from "./IGenerateDalleImage"

export class GenerateDalleImage implements IGenerateDalleImage {
    private client: OpenAIApi
    constructor() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        })
        this.client = new OpenAIApi(configuration)
    }

    async generateImages(prompt: string, n: number) {
        // Calling OpenAI Images API and generating images
        const result = await this.client.createImage({
            prompt,
            n,
            size: "512x512",
            response_format: "url"
        }, {
            // Ignores error messages of status below 500
            validateStatus: function(status) {
                return status < 500
            }
        })
        const imgUrl = result.data.data
        if(!imgUrl) throw new Error("Something went wrong!", imgUrl)
        return imgUrl
    }
}