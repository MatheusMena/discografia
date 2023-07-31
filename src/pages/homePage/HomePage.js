
import { useState, useEffect, useContext } from 'react';
import { requestAlbumsTracks } from '../../services/requests';
import AlbumCard from '../../components/albumCard/AlbumCard';
import Navbar from '../../components/navbar/Navbar';
import Context from '../../context/Context';
import ModalAlbum from '../../components/modal/ModalAlbum';
import "./style.css"


export default function HomePage() {

  // Acessa o context com os albums
  const { albumsList, setAlbumsList } = useContext(Context);

  // Manipula modal Album
  const [isModalAlbumOpen, setModalAlbumOpen] = useState(false);


  // input Buscar 
  const [input, setInput] = useState('');


  // useEffect hook
  useEffect(() => {
    async function reqAlbums() {
      const req = await requestAlbumsTracks('');
      // Atualiza contexto com os albums
      setAlbumsList(req.data);

    }
    reqAlbums();
  }, [input, setAlbumsList]);


  // Funcao de fechar modal album
  const closeModalAlbum = () => {
    setModalAlbumOpen(false);
  };


  return (
    <div>
      <Navbar />

      {/*Conteudo da pagina*/}
      <div className='container-home'>

        {/* Input search */}
        <label className='search-title' htmlFor="search">
          Digite uma palavra chave:
        </label>

        <div className='search-container'>
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
        </div>
       
        <ModalAlbum isOpen={isModalAlbumOpen} closeModal={closeModalAlbum} /> 

          {/* Album card */}
        {albumsList.length ? (albumsList.map((item, index) =>
          <AlbumCard key={index} albumTitle={item.name} year={item.year} number={index} id={item.id} tracks={item.tracks}
          />
        )) : <button className='homepage-add-album' /*caso nao tiver nenhum album adicionado mostra o modal de adicionar album*/
          onClick={() => {
            setModalAlbumOpen(true)
          }}
        >adicionar album</button>
        }

      </div>
    </div>
  )
}
