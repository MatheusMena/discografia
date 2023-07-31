// import { Route, Routes } from 'react-router-dom'  *Caso tiver mais de uma pagina;
import Provider from './context/Provider';
import HomePage from './pages/homePage/HomePage';

function App() {


  return (
    <Provider>
      <HomePage />
    </Provider>

      /**Caso tiver mais de uma pagina;
       <Routes>
         <Route  path="/" element={ <HomePage /> } />
      </Routes> */
  );
}

export default App;
