import axios, { Axios, AxiosResponse } from "axios";
import { IGeneration } from "./types";
import { IUser } from "../types/Context/signin";

export async function CreateUser(
  access_token: string
): Promise<AxiosResponse<{ createdUser: IUser }>> {
  return await axios.post(process.env.API_URL + "/api/createuser", {
    access_token,
  });
}

export async function generateDalleIcons({
  prompt,
  n,
  prevCreditsAmt,
  creditsId,
  email,
  iconObject,
  iconDescription,
  color,
  style,
  isPremium,
}: {
  prompt: string;
  n: number;
  prevCreditsAmt: number;
  creditsId: number;
  email: string;
  iconObject: string;
  iconDescription: string;
  color: string;
  style: string;
  isPremium: boolean;
}): Promise<
  AxiosResponse<{
    prompt: string;
    n: number;
    URLs: string[];
    authorEmail: string;
    iconObject: string;
    iconDescription: string;
    color: string;
    style: string;
  }>
> {
  return await axios.post(process.env.API_URL + "/api/generate", {
    prompt,
    n,
    prevCreditsAmt,
    creditsId,
    email,
    iconDescription,
    iconObject,
    color,
    style,
    isPremium,
  });
}

export async function retrieveGenerations(
  email: string
): Promise<AxiosResponse<IGeneration[]>> {
  return await axios.get(
    `${process.env.API_URL}/api/get-generations?email=${email}`
  );
}

export async function getUserCredits(id: string): Promise<
  AxiosResponse<{
    credits: {
      amount: number;
      creditsId: number;
    };
  }>
> {
  return await axios.get(`${process.env.API_URL}/api/get-credits?id=${id}`);
}
