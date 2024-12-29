import Book from "./Book"
export default function BookStore({books}){
    return(
        <div className="bookStore">
               <h3 >Numbers of Books: { books.length}</h3>
        {
            books.map(book=> <Book  book={book}/>)
        }
        </div>
    )
}