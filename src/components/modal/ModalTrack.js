import { useState, useContext } from 'react';
import { addNewTrack, requestAlbumsTracks } from '../../services/requests';
import Context from '../../context/Context';
import "./modal.css"

export default function ModalTrack({ isOpen, closeModal, id, track }) {

  // Acessa o context com os albums
  const { setAlbumsList } = useContext(Context);


  // Estados
  const [trackName, setTrackName] = useState('');
  const [duration, setDuration] = useState('');
  const [numberTrack, setNumberTrack] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Informacoes do album a ser adicionado
    const data = {
      album_id: id, number: numberTrack, title: trackName, duration: duration
    }
    // Adiciona album
    addNewTrack(data)

    // Atualiza o a lista de albums no Context
    const req = await requestAlbumsTracks('');
    setAlbumsList(req.data);

    // Feche o modal após enviar os dados
    closeModal();

    // Recarrega a página
    window.location.reload();
  };
  
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content-track">

        <h2>Adicionar faixa</h2>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="numberTrack">Numero da faixa</label>
            <input
              type="number"
              id="numberTrack"
              value={numberTrack}
              onChange={(e) => setNumberTrack(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="duration">Duracao da faixa em segundos</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />

          </div>
          <div className='form-container-button'>
            <button type="submit">Adicionar faixa</button>
            <button onClick={() => closeModal()}>Fechar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
