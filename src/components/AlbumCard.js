import React from 'react'
import "./AlbumCard.css"
import { requestAlbumsTracks } from '../services/requests';
import { useState, useEffect } from 'react';
import { PencilSimple, Trash } from 'phosphor-react'

export default function AlbumCard(props) {

 // tracks 
 const [trackList, setTrackList] = useState([]);
 const [editAlbum, setEditAlbum] = useState(false);
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
         <PencilSimple className='icon' onClick={() => setEditAlbum(!editAlbum)}/>
      </div>
     
  
     

          {trackList.length ? (trackList.map((item) => 
 <div key={item.number} class="containerInfo">
            <div class="info2">

              <div className='textStyle'>
                {editAlbum ? <Trash  onClick={() => {
                  
                  trackList.filter((item2) =>
                  item2 != trackList[item.title]
                  )
                
                }} className='icon'/> : null
                }
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
            
          ): <div class="containerInfo">sem faixas, adicione uma </div>
          }

      </div>
    
  )
}
