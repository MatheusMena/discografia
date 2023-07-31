import { useState, useEffect, useContext } from 'react';
import { requestAlbumsTracks, deleteTrack, deleteAlbum } from '../../services/requests';
import { PencilSimple, Trash } from 'phosphor-react'
import ModalTrack from "../modal/ModalTrack";
import ModalAlbum from "../modal/ModalAlbum";
import Context from "../../context/Context";
import timeFormat from "../../utils/funcoes";
import "./AlbumCard.css";

export default function AlbumCard(props) {

  // acessa o context com os albums
  const { albumsList, setAlbumsList } = useContext(Context);

  // estados
  const [trackList, setTrackList] = useState([]);
  const [editAlbum, setEditAlbum] = useState(false);

  //manipula modal Album
  const [isModalAlbumOpen, setModalAlbumOpen] = useState(false);

  //  manipula modal faixa
  const [isModalTrackOpen, setModalTrackOpen] = useState(false);



  // funcao de fechar modal faixa
  const closeModalTrack = () => {
    setModalTrackOpen(false);
  };


  // funcao de fechar modal album
  const closeModalAlbum = () => {
    setModalAlbumOpen(false);
  };



  // useEffect
  useEffect(() => {

    // requisicao GET com base no titulo do album
    async function getAlbumsTracks() {
      const req = await requestAlbumsTracks(props.albumTitle);
      // atualiza a lista de faixas de acordo com o album
      setTrackList(req.data[0].tracks)

    }
    getAlbumsTracks();
  }, [props.albumTitle]);


  return (
    <div class="album-container">

      <div className='album-container-header'>

        <div className='album-header-flex'>
          {/* titulo do album */}
          <p>Álbum: {props.albumTitle}, {props.year}</p>

          {/* funcao de editar */}
          <PencilSimple className={`pencil ${editAlbum ? 'pencil-selected' : ''} icon`} onClick={() => {
            setEditAlbum(!editAlbum)
          }} />
        </div>



        {/* Se tiver um album , mostra adicionar faixa, Adicionar album e Remover album */}
        {editAlbum ?
            (
              <div className="container-button">
                {/* Adicionar faixa */}
                <button
                  className="album-button button-size "
                  onClick={() => setModalTrackOpen(true)}>
                  Adicionar faixa
                </button>

                {/* Adicionar album */}
                <button
                  className="album-button button-size "
                  onClick={() => {
                    setModalAlbumOpen(true)
                  }}
                >
                  Adicionar novo álbum
                </button>

                {/* Remover album */}
                <button
                  className="album-button button-size "
                  onClick={() => {
                    const getAlbumTitle = albumsList.filter((i) => i.name !== props.albumTitle)

                    if (window.confirm('tem certeza que deseja excluir este album e todas suas faixas?')) {
                      // Remove o album
                      deleteAlbum(props.id);
                      // Atualiza a lista de albuns do context
                      setAlbumsList(getAlbumTitle)
                    }
                  }}>Remover álbum
                </button>
              </div>
            )
            : null
        }
        {/* modais */}
        <ModalTrack isOpen={isModalTrackOpen} closeModal={closeModalTrack} id={props.id} track={trackList} />
        <ModalAlbum isOpen={isModalAlbumOpen} closeModal={closeModalAlbum} />
      </div>


      {/* verifica se existem faixas no album, se tiver faz isto: */}
      {trackList.length ?
        (
          trackList.map((item) =>
            //  container que abriga tudo sobre a faixa do album
            <div key={item.number} class={`album-track ${editAlbum ? 'container-shadow' : ''}`}>

              {/* container que abriga o numero e a faixa */}
              <div class="track-numberTitle">

                {editAlbum ? 
                // Funcao de excluir faixa
                <Trash onClick={() => {

                  // confirma exclusao da faixa
                  if (window.confirm('esta faixa será excluida')) {
                    async function delTrack() {
                      // Obtem o id da faixa atual comparando com a lista de faixas
                      const getTrackID = trackList.filter((i) => i.title === item.title)
                      await deleteTrack(getTrackID[0].id);
                      const removeTrackID = trackList.filter((i) => i.id !== getTrackID[0].id)
                      // Atualiza as faixas
                      setTrackList(removeTrackID)

                    }
                    delTrack();
                  }

                }} className='trash icon' /> : null
                }
                <div className='track-text'>

                {/* Numero da faixa */}
                  <p>N°</p>
                  <p>{item.number}</p>
                </div>


                {/* Titulo da faixa */}
                <div className='track-text'>
                  <p>Faixa</p>
                  <p>{item.title}</p>
                </div>

              </div>

              {/* Duracao da faixa */}
              <div class="track-duration track-text">

                <p>Duracao</p>
                <p>{timeFormat(item.duration)}</p>
              </div>
            </div>
          )

        ) :
        // Se nao tiver faixa mostra isto:
        <div class="album-track"><button className="add-track-button" onClick={() => setModalTrackOpen(true)}>Adicione uma faixa</button></div>
      }

    </div>

  )

}
