import type { Library } from '../types/lib'
import type { Book } from '../types/book'

export const createBooksList = (libraries: Library[]) => {
  const booksList: Book[] = []

  libraries.forEach((library) => {
    library.books.forEach((book) => {
      // Avoid duplicates based on book ID
      const existingBook = booksList.find((b) => b.id === book.id)
      if (existingBook) {
        existingBook.locations = [...(existingBook.locations || []), library.location]
      } else {
        booksList.push({ ...book, locations: [library.location] })
      }
    })
  })
  return booksList
}
