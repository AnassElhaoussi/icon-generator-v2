export interface IGenerateDalleImage {
    generateImages(prompt: string, n: number): Promise<Error | object[]>
} 