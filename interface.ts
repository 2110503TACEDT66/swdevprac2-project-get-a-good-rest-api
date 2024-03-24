export interface RegisterJson {
  name: string,
  telephone: string,
  email: string,
  role: string,
  password: string
}

export enum Role {
  User = 'user',
  Admin = 'admin'
}

export interface UserProfile {
  success: boolean,
  data: {
    _id: string,
    name: string,
    telephone: string,
    email: string,
    role: Role,
    __v: number,
  }
}
export interface MassageItem {
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  description: string,
  _id: string,
  __v: number,
  id: string
}

export interface MassageJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: MassageItem[]
}

export interface MassageOne {
  success: boolean,
  data: MassageItem
}