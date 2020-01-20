import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente : Bloco isolado de HTML, CSS e JS , o qual não interfere no restante da aplicaçao
// Propriedade : Informações que um componente PAI passa para para o componente FILHO 
// Estado : Informações mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar peerfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar peerfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar peerfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g">Acessar peerfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
