export interface IGenerateDalleImage {
    generateImages(prompt: string, n: number, isPremium: boolean): Promise<Error | object[]>
} 