import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => <h1>Deu merda</h1>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);