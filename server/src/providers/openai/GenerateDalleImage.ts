import { OpenAI } from "openai";
import { IGenerateDalleImage } from "./IGenerateDalleImage";

export class GenerateDalleImage implements IGenerateDalleImage {
  private client: OpenAI;
  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateImages(prompt: string, n: number, isPremium: boolean) {
    // Calling OpenAI Images API and generating images
    const result = await this.client.images.generate({
      model: isPremium ? "dall-e-3" : "dall-e-2",
      prompt,
      n,
      size: isPremium ? "1024x1024" : "512x512",
      response_format: "url",
    });

    const images = result.data;
    if (!images) throw new Error("Something went wrong!", images);
    return images;
  }
}
