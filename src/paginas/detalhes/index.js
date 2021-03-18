import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

export default function Detalhes(){
  return(
   <>
   <h1>Dicas de Sustentabiliade</h1>
<div className="butao">
   <Button label="Dicas de como economizar agua" className="p-button-warning" />
    <Button label="Dicas de como economizar energia" className="p-button-warning" />
     <Button label="Dicas de como diminuir a emisao de gas carbonico" className="p-button-warning" />
      <Button label="Dicas de como diminuir o uso de sacolas plasticas" className="p-button-warning" />
      <Button label="Dicas de como descartar o lixo eletronico" className="p-button-warning" />
      <Button label="Dicas de como diminuir o uso de papel" className="p-button-warning" />
      
  </div>
  </>
  );
}
