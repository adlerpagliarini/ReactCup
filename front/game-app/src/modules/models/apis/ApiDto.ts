
export interface ApiDto<T> {
    success: boolean,
    response: T,
    errors: ApiError[]
}

export interface ApiError {
    key: string,
    value: string
}