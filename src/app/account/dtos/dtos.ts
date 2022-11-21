export interface login{
  email: string
  password: string
}

export interface signup{
  email:string
  password: string
}

export interface signupResponse{
  id: string
  email: string
  password: string
  token: string
}

export interface loginResponse {
  id: string
  email: string
  password: string
  token: string
}
