import type { Book } from './book'

export interface Library {
  id: string
  name: string
  location: string
  contact: string
  books: Book[]
}
