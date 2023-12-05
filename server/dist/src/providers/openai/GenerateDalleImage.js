import { OpenAI } from "openai";
export class GenerateDalleImage {
    client;
    constructor() {
        this.client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    async generateImages(prompt, n, isPremium) {
        // Calling OpenAI Images API and generating images
        const result = await this.client.images.generate({
            model: isPremium ? "dall-e-3" : "dall-e-2",
            prompt,
            n,
            size: isPremium ? "1024x1024" : "512x512",
            response_format: "url",
        });
        const images = result.data;
        if (!images)
            throw new Error("Something went wrong!", images);
        return images;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVEYWxsZUltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9vcGVuYWkvR2VuZXJhdGVEYWxsZUltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHaEMsTUFBTSxPQUFPLGtCQUFrQjtJQUNyQixNQUFNLENBQVM7SUFDdkI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBYyxFQUFFLENBQVMsRUFBRSxTQUFrQjtRQUNoRSxrREFBa0Q7UUFDbEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDL0MsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQzFDLE1BQU07WUFDTixDQUFDO1lBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3pDLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUMsQ0FBQztRQUVILE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiJ9