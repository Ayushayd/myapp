import Book from "./Book"
const Bookstore = () => {

const listbook = [
  {
  imgurl: "https://m.media-amazon.com/images/I/31yUjjI+FEL._SY445_SX342_.jpg",
  title: "Cosmic Archeology",
  author: "by Ian Beardsley"
  },
  {
  imgurl: "https://m.media-amazon.com/images/I/51MC8AHXCRL._SY445_SX342_.jpg",
  title: "Cosmic Science of Vaastu",
  author: "by N. H. Sahasrabudhe"
  },
  {
  imgurl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY466_.jpg",
  title: "The Power of Your Subconscious Mind",
  author: "by Joseph Murphy"
  },
  {
  imgurl: "https://m.media-amazon.com/images/I/51SkIDTd9rL._SY445_SX342_.jpg",
  title: "Harry Potter and the Chamber of Secrets",
  author: "by J.K. Rowling"
  }
]

  return (
    <section className="book">
      {
        listbook.map((item)=>{
          return <Book {...item}/>
        })
      }
    </section>
  )
}

export default Bookstore
