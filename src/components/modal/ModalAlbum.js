import React, { useState } from 'react';
import "./modal.css"
import { addNewAlbum } from '../../services/requests';

export default function ModalAlbum({ isOpen, closeModal }) {
    const [albumName, setAlbumName] = useState('');
    const [albumYear, setAlbumYear] = useState('');
  

    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Aqui você pode fazer a requisição POST para o servidor com os dados do álbum
      console.log('Nome do Álbum:', albumName);
      console.log('Ano do Álbum:', albumYear);
      const data = {
        name: albumName, year: albumYear
      }
      addNewAlbum(data)
      // Feche o modal após enviar os dados
      closeModal();
    };
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <h2>Adicionar Álbum</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="albumName">Nome do Álbum:</label>
          <input
            type="text"
            id="albumName"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="albumYear">Ano do Álbum:</label>
          <input
            type="number"
            id="albumYear"
            value={albumYear}
            onChange={(e) => setAlbumYear(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Álbum</button>
        <button onClick={()=> closeModal}>fechar</button>
      </form>
    </div>
  </div>
  )
}
