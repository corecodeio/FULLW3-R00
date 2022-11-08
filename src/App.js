import './App.css';
//comppnents
//import Hello from './components/Hello';
//import Formulario from './components/Formulario';
import FormularioFormik from './components/FormularioFormik';

function App() {
  /*const data = {
    bar: 4, val: null
  }*/
  return (
    <div className="App">
      {/*<Hello name=" " {...data} />*/}
      {/*<Formulario/>*/}
      <FormularioFormik/>
    </div>
  );
}

export default App;
