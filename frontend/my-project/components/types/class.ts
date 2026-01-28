export type ClassDetail = {
  description: string
  equipments: string[]
  perfectFor: string[]
  contact: string
}

export type ClassItem = {
  id: string
  slug: string
  title: string
  category: string
  duration: string
  level: string
  image: string
  shortDescription: string
  detail: ClassDetail
}
