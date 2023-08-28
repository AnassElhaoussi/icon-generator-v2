import { Configuration, OpenAIApi } from "openai"

export class GenerateDalleImage {
    private client: OpenAIApi
    constructor() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        })
        this.client = new OpenAIApi(configuration)
    }

    async generateImages(prompt: string, n: number) {
        const result = await this.client.createImage({
            prompt,
            n,
            size: "512x512"
        })
        const imgUrl = result.data.data[0].url
        if(!imgUrl) throw new Error("Something went wrong!")
        return imgUrl
    }
}