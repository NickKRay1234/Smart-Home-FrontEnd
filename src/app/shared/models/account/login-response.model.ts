export interface LoginResponse {
    isAuthSuccessful: boolean;
    errorMessage: string;
    token: string;
    is2StepVerificationRequired: boolean;
    provider: string;
}