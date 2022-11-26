export interface login{
  email: string
  password: string
}

export interface UserCreateDtos {
  name: string
  email:string
  password: string
}

export interface UserCreateResponseDtos{
  id: number
  name: string
  email: string
  password: string
}

export interface loginResponse {
  id: string
  email: string
  password: string
  token: string
}
