import './index.css'

const Book = ({imgurl, title, author}) => {
  return (
    <>
      <article className="book1">
        <img src={imgurl} alt={title} />
        <h2>{title}</h2>
        <h3>{author}</h3>
      </article>
      </>
  )
}

export default Book