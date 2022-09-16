export interface IFetchData {
    navigation: INavigation[];
    posts: IPost[];
}

export interface INavigation {
    id: string;
    name: string;
    link: string;
    image: string;
}

export interface IPost {
    id: string;
    active: boolean;
    paymentLevel: number;
    users: IUser;
}

export interface IUser {
    id: string;
    active: boolean;
    avatar: string;
    name: string;
}