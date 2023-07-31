import { useState, useContext } from 'react';
import { addNewAlbum, requestAlbumsTracks } from '../../services/requests';
import Context from '../../context/Context';
import "./modal.css"


export default function ModalAlbum({ isOpen, closeModal }) {

  // Acessa o context com os albums
  const { setAlbumsList } = useContext(Context);

  // Estados
  const [albumName, setAlbumName] = useState('');
  const [albumYear, setAlbumYear] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: albumName, year: albumYear
    }
    // Adiciona o novo album
    addNewAlbum(data);

    // atualiza o context
    const req = await requestAlbumsTracks('');
    setAlbumsList(req.data);

    // Feche o modal após enviar os dados
    closeModal();

    // Recarrega a página
    window.location.reload();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">

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
          <div className='form-container-button'>
            <button type='submit'>Adicionar Álbum</button>
            <button onClick={() => closeModal()}>Fechar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
