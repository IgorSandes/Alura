import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {
  return (
    <div className="App">
      <header className="banner">
        <Banner />
      </header>
      <main>
        <Formulario />
      </main>
    </div>
  );
}

export default App;
