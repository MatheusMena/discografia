// Funcoes de requisicao de api

export async function requestAlbumsTracks(albumName) {
  const response = await fetch(`https://tiao.supliu.com.br/api/album?keyword=${albumName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    },
  });

  const result = await response.json();
  return result;
}

export async function deleteAlbumTrack(id) {
  const response = await fetch(`https://tiao.supliu.com.br/api/track/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    },
  });

  const result = await response.json();
  return result;
}

export async function addNewAlbum(albumData) {
  const response = await fetch('https://tiao.supliu.com.br/api/album', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    },
    body: JSON.stringify(albumData),
  })
  const result = await response.json();
  console.log(result);
};

export async function addNewTrack(trackData) {
  const response = await fetch('https://tiao.supliu.com.br/api/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    },
    body: JSON.stringify(trackData),
  })
  const result = await response.json();
  console.log(result);
};

export async function deleteTrack(id) {
  const response = await fetch(`https://tiao.supliu.com.br/api/track/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    }
  })
  const result = await response.json();
  console.log(result);
};

export async function deleteAlbum(id) {
  const response = await fetch(`https://tiao.supliu.com.br/api/album/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    }
  })
  const result = await response.json();
  console.log(result);
};