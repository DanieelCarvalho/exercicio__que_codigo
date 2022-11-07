import { useState } from 'react' 

function App() {
  const [caixa, setCaixa]= useState("") 
  
  
  
  return (
    <div className="App">
      <textarea placeholder="Digite aí" value={caixa} rows={15} onChange={((e) =>{
        setCaixa(e.target.value)
      })}></textarea>
      <div className="mirror">
        <h1>Código</h1>
        {caixa.toUpperCase()}

      </div>
    </div >
  );
}

export default App;
