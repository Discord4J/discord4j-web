import Butter from "buttercms"
export const butter = Butter("8cf024fd2c17deeccb44123c981d2c893716c2ed")

export interface Error {
  status: number
  statusText: string
  detail: string
}

export interface BlogPost {
  meta: MetaEntity
  data: DataEntity[]
}

export interface MetaEntity {
  count: number
  next_page: number | null
  previous_page: number | null
}

export interface DataEntity {
  url: string
  created: string
  published: string
  author: Author
  categories: CategoriesOrTags[]
  tags: CategoriesOrTags[]
  featured_image: string | null
  slug: string
  title: string
  body: string
  summary: string
  seo_title: string
  meta_description: string
  status: string
  rank: number
}

export interface Author {
  first_name: string
  last_name: string
  email: string
  slug: string
  bio: string
  title: string
  linkedin_url: string
  facebook_url: string
  twitter_handle: string
  profile_image: string
}

export interface CategoriesOrTags {
  name: string
  slug: string
}
