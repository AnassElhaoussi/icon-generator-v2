
import axios, { AxiosResponse } from "axios"

export async function CreateUser(access_token: string) {
    return await axios.post("http://localhost:8000/api/createuser", { access_token })
}

export async function generateDalleIcons({ prompt, 
    n,
    prevCreditsAmt,
    creditsId,
    email
}: { 
    prompt: string, 
    n: number, 
    prevCreditsAmt: number, 
    creditsId: number,
    email: string
}): Promise<AxiosResponse<{
    prompt: string,
    n: number,
    URLs: string[],
    authorEmail: string
}>> {
    return await axios.post(
        "http://localhost:8000/api/generate", { 
            prompt, 
            n, 
            prevCreditsAmt, 
            creditsId,
            email
        })
}

export async function retrieveGenerations() {
    return await axios.get(`http://localhost:8000/api/get-generations?email=${email}`)
}

export async function getUserCredits(
    id: string
): Promise<AxiosResponse<{credits: {
    amount: number,
    creditsId: number
}}>> {
    return await axios.get(`http://localhost:8000/api/get-credits?id=${id}`)
} 
