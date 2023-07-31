import { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  //Lista de Albums
  const [albumsList, setAlbumsList] = useState([]);
  //Lista de tracks
  const [trackList, setTrackList] = useState([]);

  return (
    <Context.Provider value={{ albumsList, setAlbumsList, trackList, setTrackList }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;