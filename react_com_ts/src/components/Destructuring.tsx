import React from 'react'

interface Props 
{
    title: string
    content: string
    commentQty: number
    tags: string[]
    //8 - ENUM 
    category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

const Destructuring = ({title, content, commentQty, tags, category} : Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentarios : {commentQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
        <h3>Categoria : {category}</h3>
    </div>
  )
}

export default Destructuring