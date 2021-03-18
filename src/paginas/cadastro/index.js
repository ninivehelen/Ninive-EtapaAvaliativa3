import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { TabMenu } from 'primereact/tabmenu';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Cadastro(){
   return (
     <>
      <h1>Cadastro</h1>
     <div className="formulario">
    <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Digite seu e-mail:</label>
    <div className="p-col">
        <InputText id="firstname3" type="text"/>
    </div>
</div>
<div className="formulario">
    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Digite sua senha:</label>
    <div className="p-col">
        <InputText id="lastname3" type="text"/>
    </div>
</div>
<div className="formulario">
   <a href="/detalhes">
    <Button label="Cadastrar" className="p-button-warning" />
    </a>
   </div>
  </>
  );
}
  