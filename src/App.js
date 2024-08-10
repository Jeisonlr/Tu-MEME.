import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas =>{
      let img = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }
  return (
    <div className="App">
      
      <div className='selectores'>
      <h1>CREA TU PROPIO MEME</h1>
        <select onChange={onChangeImagen}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">futurama</option>
          <option value="smart">hombre que piensa</option>
          <option value="matrix">Matrix</option>
          <option value="history">history chanel</option>
          <option value="philosoraptor">filosoraptor</option>
        </select> <br/>

        <input onChange={onChangeLinea1} type="text" placeholder='linea 1'/> 
        <input onChange={onChangeLinea2} type="text" placeholder='linea 2'/> <br/>
        <button onClick={onClickExportar}>Exportar</button>
      </div>
  

      <div className='meme' id='meme'>
        <span className='span1'>{linea1}</span><br/>
        <span className='span2'>{linea2}</span>
        <img src={'img/' + imagen +'.jpg'}alt='tu meme'/>
      </div>
    
    </div>
  );
}

export default App;
