// export interface IBookCreate {
//   name: string
//   bookEdition: string
//   publishYear: string
//   thumbnail: string
//   iban: string
// }
//
// export interface IBookCreateResponse{
//   id: string
//   name: string
//   bookEdition: string
//   publishYear: string
//   thumbnail: string
//   iban: string
// }



//get all response[]
//get on detail response
//create model and response
//update model and response
//patch model and response
//delete response

export interface IBookCreate{
  name:string
  thumbUrl:string
  price:number
}

export interface IBookUpdate{
  name:string
  thumbUrl:string
  price:number
}

export interface IBookPatch{
  name?:string
  thumbUrl?:string
  price?:number
}

export interface IBookResponse{
id:string
  name:string
  thumbUrl:string
  price:number
  created:Date
  updated:Date
}

export interface IBookDetailResponse{
  id:string
  name:string
  thumbUrl:string
  price:number
  author: {
    id:string
    name:string
    created:Date
    updated:Date
  }
  created:Date
  updated:Date
}
