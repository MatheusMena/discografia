import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className='navbar'>
        <div class="logo">
          <img alt="" src={logo} className='logo'/>
        </div>

        <h1 className='title'>Discografia</h1>
      </header>

      {/*lista de pesquisa*/}
      <div className='searchList'>

      <label className='searchTitle' htmlFor="search">Digite uma palavra chave:</label>
      <input
      className='inputSearch searchSize'
        type="text"
        id="search"
        // placeholder="Digite aqui sua pesquisa"
        // onChange={handleSearch}
      />
      <button className='searchButton searchSize' >Procurar</button>
    </div>
    </div>
  );
}

export default App;
