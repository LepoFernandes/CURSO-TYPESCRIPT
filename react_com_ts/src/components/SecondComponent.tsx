import React from 'react'

interface Props 
{
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Meu segundo componente</p>
        <p>O nome dele sera {props.name}</p>
    </div>
  )
}

export default SecondComponent