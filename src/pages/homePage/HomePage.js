
import AlbumCard from '../../components/albumCard/AlbumCard';
import Navbar from '../../components/navbar/Navbar';
import "./style.css"
import { useState, useEffect } from 'react';
import { requestAlbumsTracks } from '../../services/requests';
import ModalAlbum from '../../components/modal/ModalAlbum';



export default function HomePage() {


 //manipula modal
 const [isModalOpen, setIsModalOpen] = useState(false);


 const closeModal = () => {
   setIsModalOpen(false);
 };

  // input Buscar 
  const [input, setInput] = useState('');
  //  console.log(input)


  //  Albums
  const [albumsList, setAlbumsList] = useState([]);
  console.log("albumlist",albumsList)

  // useEffect hook
  useEffect(() => {
    async function reqAlbums() {
      const req = await requestAlbumsTracks('');
      setAlbumsList(req.data);

    }
    reqAlbums();


  }, [input]);




  return (
    <div>
      <Navbar />
   
      {/*lista de pesquisa*/}
      <div className='search-container'>
         {/* add Album */}
        <button
        onClick={() => setIsModalOpen(true)}
        >
          adicionar novo album
        </button>
<ModalAlbum isOpen={isModalOpen} closeModal={closeModal}/>
       
     

        {/* Input search */}
        <label className='search-title' htmlFor="search">
          Digite uma palavra chave:
        </label>
        <input
          className='input-search input-size'
          type="text"
          id="search"
          value={input}
          onChange={({ target }) => {
            setInput(target.value)
          }}
        />


        {/* button search */}
        <button
          className='search-button input-size'
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
          <AlbumCard key={index} albumTitle={item.name} year={item.year} number={index} id={item.id} tracks={item.tracks}/>
        )
        }

      </div>
    </div>
  )
}
