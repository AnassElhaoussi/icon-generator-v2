
import axios, { Axios, AxiosResponse } from "axios"
import { IGeneration } from "./types"

export async function CreateUser(access_token: string) {
    return await axios.post("http://localhost:8000/api/createuser", { access_token })
}

export async function generateDalleIcons({ prompt, 
    n,
    prevCreditsAmt,
    creditsId,
    email,
    iconObject,
    iconDescription,
    color,
    style
}: { 
    prompt: string, 
    n: number, 
    prevCreditsAmt: number, 
    creditsId: number,
    email: string,
    iconObject: string,
    iconDescription: string,
    color: string,
    style: string
}): Promise<AxiosResponse<{
    prompt: string,
    n: number,
    URLs: string[],
    authorEmail: string,
    iconObject: string,
    iconDescription: string,
    color: string,
    style: string
}>> {
    return await axios.post(
        "http://localhost:8000/api/generate", { 
            prompt, 
            n, 
            prevCreditsAmt, 
            creditsId,
            email,
            iconDescription,
            iconObject,
            color,
            style
        })
}

export async function retrieveGenerations(
    email: string
): Promise<AxiosResponse<IGeneration[]>> {
    return await axios
    .get(`http://localhost:8000/api/get-generations?email=${email}`)
}

export async function getUserCredits(
    id: string
): Promise<AxiosResponse<{credits: {
    amount: number,
    creditsId: number
}}>> {
    return await axios.get(`http://localhost:8000/api/get-credits?id=${id}`)
} 
