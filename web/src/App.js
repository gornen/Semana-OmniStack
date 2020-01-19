import React, { useState } from 'react';


// Componente : Bloco isolado de HTML, CSS e JS , o qual não interfere no restante da aplicaçao
// Propriedade : Informações que um componente PAI passa para para o componente FILHO 
// Estado : Informações mantidas pelo componente (Lembrar: imutabilidade)
import Header from './Header';

function App() {

  const [counter, s] = useState(0);

  function incrementCounter(){
    s(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
