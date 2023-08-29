export interface IS3StorageProvider {
    save(url: string): Promise<string>
}