import React from 'react';


//4 - IMPORTACAO DE COMPONENTES

import FirstComponent from './components/FIrstComponent';

//5 - DESTRUCTURING NAS PROPS

import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

//6- USANDO HOOK USESTATE

import State from './components/State';

//8 - TYPE

type textOrNull = string | null
type fixed = "Oi" | "Tchau"


function App() {

  //1 - VARIAVEIS
  const name: string = "Lucas"
  const age: number = 26
  const isWorking: boolean = true


  //2 - FUNCOES

  const userGreeting = (name:string) : string => {
    return `Ola, ${name}`

  }

  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText : textOrNull = null
  const testandoFixed: fixed = "Oi"

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          TypeScript Com React
        </h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Esta trabalhando!</p>
        ) }
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name = "Segundo"/>
        <Destructuring 
        title = "Primeiro post" 
        content="Algum conteudo" 
        commentQty={10} 
        tags={["js","ts","udemy"]} 
        category = {Category.TS}
        />
        <Destructuring 
        title = "Segundo post" 
        content="Mais um conteudo" 
        commentQty={1} 
        tags={["facul","sql","udemy"]} 
        category = {Category.JS}
        />
        <State />
        {myText && 
        <p>Tem texto na variavel</p>
        }
        {mySecondText &&
        <p>Tem texto na variavel</p>
        }
      </header>
    </div>
  );
}

export default App;
