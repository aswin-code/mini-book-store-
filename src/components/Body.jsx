import React from 'react'
import { books } from '../data'
const Books = () => {
    return (
        books.map(e => (<article className='book'>
            <img src={e.image} alt="" />
            <h1>{e.title}</h1>
            <h4>{e.author}</h4>
        </article>))
    )
}


const Body = () => {
    return (
        <section className='booklist'>
            <Books />
        </section>
    )
}

export default Body