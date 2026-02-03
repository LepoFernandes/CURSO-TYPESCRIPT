import React from 'react';


//4 - IMPORTACAO DE COMPONENTES

import FirstComponent from './components/FIrstComponent';

//5 - DESTRUCTURING NAS PROPS

import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

function App() {

  //1 - VARIAVEIS
  const name: string = "Lucas"
  const age: number = 26
  const isWorking: boolean = true


  //2 - FUNCOES

  const userGreeting = (name:string) : string => {
    return `Ola, ${name}`

  }

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
        />
        <Destructuring 
        title = "Segundo post" 
        content="Mais um conteudo" 
        commentQty={1} 
        tags={["facul","sql","udemy"]} 
        />
      </header>
    </div>
  );
}

export default App;
