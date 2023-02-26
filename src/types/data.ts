export interface TheApplication {
    id: number;
    title: string;
    complete: boolean;
}

export interface Iuser {
    userID: number,
    userFName: string,
    userMName: string,
    userSName: string,
    email: string,
    tel: string,
    birthday: string,
    sex: "m" | "f",
    admin: boolean,
}
