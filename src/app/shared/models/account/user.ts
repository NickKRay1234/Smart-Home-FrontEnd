export type User = {
    firstName: string;
    lastName: string;
    email: string;
    address?: Address;
    roles: string[];
    is2FEnabled?: boolean;
}

export type Address = {
    line1: string;
    line2?: string;
    city: string;
    disctrict: string;
    postalCode: string;
    country: string;
}