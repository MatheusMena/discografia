import "./AlbumCard.css"
import { requestAlbumsTracks, deleteTrack, deleteAlbum } from '../../services/requests';
import { useState, useEffect } from 'react';
import { PencilSimple, Trash } from 'phosphor-react'
import ModalTrack from "../modal/ModalTrack";

export default function AlbumCard(props) {
console.log("tracks",props.tracks)
  // handle 
 //manipula modal
 const [isModalOpen, setIsModalOpen] = useState(false);

 const closeModal = () => {
  setIsModalOpen(false);
};
  // tracks 
  const [trackList, setTrackList] = useState([]);
  const [editAlbum, setEditAlbum] = useState(false);
  const [colorEdit, setColorEdit] = useState('');
  //  console.log("trackList",trackList)


  useEffect(() => {
    // Req Albums
    async function getAlbumsTracks() {
      const req = await requestAlbumsTracks(props.albumTitle);
      setTrackList(req.data[0].tracks)

    }
    getAlbumsTracks();
  }, [props.albumTitle]);

  return (
    <div class="container">

      <div className='head'>
        <h2>Álbum: {props.albumTitle}, {props.year}</h2>
        <PencilSimple className='icon' onClick={() => {
          setColorEdit('shadeContainer')
          setEditAlbum(!editAlbum)
        }} />
        {editAlbum ? <button onClick={() => setIsModalOpen(true)}>adicionar faixa de album</button> : null}
        <ModalTrack isOpen={isModalOpen} closeModal={closeModal} id={props.id} track={trackList} />
        {editAlbum ? <button onClick={() =>{
          if(window.confirm('tem certeza que deseja excluir este album e todas suas faixas?')){
            deleteAlbum(props.id)
            
          }
        } }>remover album</button> : null}
      </div>



        {console.log("tracklist",trackList)}
      {trackList.length ? (trackList.map((item) =>
        <div key={item.number} class={`containerInfo ${editAlbum ? 'shadeContainer' : ''}`}>


          <div class="info2">

            {editAlbum ? <Trash onClick={() => {
             const getTrackID= trackList.filter((i) => i.title == item.title)
             console.log(getTrackID[0].id)
             
             if(window.confirm('esta faixa será excluida')){
              async function delTrack() {
                await deleteTrack(getTrackID[0].id);
                const removeTrackID= trackList.filter((i) => i.id !== getTrackID[0].id)
                
                setTrackList(removeTrackID)
          
              }
              delTrack();
             }

            }} className='trash icon' /> : null
            }
            <div className='textStyle'>

              <p>N°</p>
              <p>{item.number}</p>
            </div>



            <div className='textStyle'>
              <p>Faixa</p>
              <p>{item.title}</p>
            </div>


          </div><div class="info3 textStyle">
            <p>Duracao</p>
            <p>{item.duration}</p>
          </div></div>
      )

      ) : <div class="containerInfo">sem faixas, adicione uma </div>
      }

    </div>

  )
}
