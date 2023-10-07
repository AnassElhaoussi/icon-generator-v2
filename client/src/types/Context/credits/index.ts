export interface ICreditsContextValues {
    credits: number | null,
    creditsId: number,
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean
}

export type CreditsContextType = null | ICreditsContextValues 