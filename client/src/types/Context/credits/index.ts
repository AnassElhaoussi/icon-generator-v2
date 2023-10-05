export interface ICreditsContextValues {
    credits: number | null,
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean
}

export type CreditsContextType = null | ICreditsContextValues 