
export interface IUploadImages {
    handle(URLs: string[]): Promise<string[]>
}