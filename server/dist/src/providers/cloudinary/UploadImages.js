import cloudinary from "./config";
export class UploadImages {
    publicURLs;
    uploader;
    constructor() {
        this.publicURLs = [];
        this.uploader = cloudinary.uploader;
    }
    async handle(URLs) {
        for (const URL of URLs) {
            const result = await this.uploader.upload(URL);
            this.publicURLs.push(result.secure_url);
        }
        return this.publicURLs;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkSW1hZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9jbG91ZGluYXJ5L1VwbG9hZEltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFVBQVUsTUFBTSxVQUFVLENBQUM7QUFFbEMsTUFBTSxPQUFPLFlBQVk7SUFDZixVQUFVLENBQVc7SUFDckIsUUFBUSxDQUE2QjtJQUM3QztRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFjO1FBQ3pCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBQ0YifQ==