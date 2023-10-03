
import axios, { AxiosResponse } from "axios"

export async function CreateUser(access_token: string) {
    return await axios.post("http://localhost:8000/api/createuser", { access_token })
}

export async function generateDalleIcons({ prompt, n }: { prompt: string, n: number }) {
    return await axios.post("http://localhost:8000/api/generate", { prompt, n })
}
