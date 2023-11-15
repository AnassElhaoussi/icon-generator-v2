import { IUploadImages } from "./IUploadImages"
import cloudinary from "./config"

export class UploadImages implements IUploadImages {
    private publicURLs: string[]
    private uploader: typeof cloudinary.uploader
    constructor() {
        this.publicURLs = []
        this.uploader = cloudinary.uploader
    }
    async handle(URLs: string[]) {
        for(const URL of URLs) {
            const result = await this.uploader.upload(URL)
            this.publicURLs.push(result.secure_url)
        }
        return this.publicURLs
    }
    
}