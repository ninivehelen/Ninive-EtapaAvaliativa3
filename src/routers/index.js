import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from '../paginas/Login'
import Cadastro from '../paginas/cadastro'
import Detalhes from '../paginas/detalhes'


export default function Routes(){
  return(
   
   <Switch>
   <Route exact path ='/login' component={Login} />
   <Route exact path ='/cadastro' component={Cadastro} />
   <Route exact path ='/detalhes' component={Detalhes} />
   </Switch>
  );
}

