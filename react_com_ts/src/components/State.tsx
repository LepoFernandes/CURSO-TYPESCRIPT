import React, {useState, ChangeEvent} from 'react'


const State = () => {
    const [text, setText] = useState<string | null>("Testando hook")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setText(e.target.value)
    }

  return (
    <div>
        <p>O texto sera : {text}</p>
        <input type="text" onChange={handleChange}  />
    </div>
  )
}

export default State