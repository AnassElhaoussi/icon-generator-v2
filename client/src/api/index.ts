import { useContext } from "react"
import axios, { AxiosResponse } from "axios"
import { UserContext } from "../Context/UserContextProvider"
import { UserContextType } from "../types/Context/signin"

export async function getExactUser(userInfos: object | null): Promise<AxiosResponse> {
    return await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userInfos.access_token}`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userInfos.access_token}`
        }
    })
}

export async function CreateUser(access_token: string) {
    return await axios.post("http://localhost:8000/api/createuser", { access_token })
}

export async function deleteUser(id: number, email: string) {
    return await axios.delete(`http://localhost:8000/api/deleteuser?id=${id}&email=${email}`)
}

