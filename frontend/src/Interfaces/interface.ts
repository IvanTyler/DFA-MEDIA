export interface INavigation {
    id: string;
    name: string;
    link: string;
    active: false;
    image: string;
}

export interface IPost {
    id: string;
    active: boolean;
    paymentLevel: number;
    activePartners: number;
    users: IUser[];
}

export interface IUser {
    id: string;
    active: boolean;
    avatar: string;
    name: string;
}