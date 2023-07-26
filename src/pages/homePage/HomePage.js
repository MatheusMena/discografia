import { useState, useEffect } from 'react';
import "./style.css"
import { requestAlbumsTracks } from '../../services/requests';
import logo from '../../assets/logo.png';
import AlbumCard from '../../components/AlbumCard';

export default function HomePage() {


   // input Buscar 
   const [input, setInput] = useState('');
  //  console.log(input)

   //  Albums
   const [albumsList, setAlbumsList] = useState([]);
   console.log(albumsList)

 
  useEffect(() => {
    async function reqAlbums() {
      const req = await requestAlbumsTracks('');
      setAlbumsList(req.data);
      
    }
    reqAlbums();
   
    
  },[input]);


  

  return (
    <div>
        {/* header */}
    <header className='navbar'>
    
      <div class="logo">
        <img alt="" src={logo} className='logo' />
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
        value={input}
        onChange={({ target }) => { 
       
          setInput(target.value) 
        }}
      />

      <button
        className='searchButton searchSize'
        onClick={() => {

          async function reqAlbums() {
            const req = await requestAlbumsTracks(input);
            setAlbumsList(req.data);
            
          }
          reqAlbums();
        }}>
        Procurar
      </button>

      {/* Album card */}
     {albumsList.map((item, index) => 
     
         <AlbumCard key={index} albumTitle={item.name} year={item.year}  number={index}/>
      )

    }

    </div>
</div>
  )
}
