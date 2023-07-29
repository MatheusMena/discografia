import React, { useState } from 'react';
import "./modal.css"
import { addNewTrack } from '../../services/requests';

export default function ModalTrack({ isOpen, closeModal, id, track }) {
    const [trackName, setTrackName] = useState('');
    const [duration, setDuration] = useState('');
  

    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Aqui você pode fazer a requisição POST para o servidor com os dados do álbum
      console.log('Nome da faixa:', trackName);
      console.log('Ano do Álbum:', duration);
      const data = {
        album_id: id, number: track.length + 1, title:trackName, duration:duration
      }
      addNewTrack(data)
      // Feche o modal após enviar os dados
      closeModal();
    };
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <h2>Adicionar faixa</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="trackName">Nome da faixa:</label>
          <input
            type="text"
            id="trackName"
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duracao da faixa:</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />

        </div>
        <button type="submit">Adicionar faixa</button>
        <button onClick={()=> closeModal}>fechar</button>
      </form>
    </div>
  </div>
  )
}
