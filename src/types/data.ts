import {MAIN_ROUTE} from "../const";
import Main from "../pages/Main/Main";

export interface TheApplication {
    id: number,
    title: string,
    complete: boolean,
}

export interface Iconference {
    theme: string,
    num: string | number,
    pass: string | number,
    link: string,
}

export interface Iuser {
    userID: number,
    userFName: string,
    userMName: string,
    userSName: string,
    email: string,
    tel: string,
    birthday: string,
    sex: "М" | "Ж",
    admin: boolean,
}

// export interface Iprorgam {
//     programID: number,
//     // name: string,
//     version: number | string,
// }

export interface Iemp {
      photo?: string,
      fName: string,
      sName: string,
      lName: string,
      grade: string,
      address: string,
      room: string,
      tel: string,
      inTel: string,
      eMail: string,
}

export interface Ikey {
    id: number,
    software: Isoftware
    key: string,
  version: number | string,
    fName: string,
    mName: string,
    lName: string,
    sb: number,
    inv: string,
    inDate: string,
    outDate: string,
}

export interface Isoftware {
  id: number,
  name: string,
  // version: number | string,
}

export interface Iroute{
  path: string,
  name: string,
  Component: React.FC,
  nav?: boolean,

}

export interface ItelRoute{
  path: any,
  name: string,
  fullname: string,
  Component: React.FC,
  disable?: boolean,
}
