// Funcoes de requisicao de api


// GET Albums
export async function requestAlbumsTracks(albumName) {
  try {
    const response = await fetch(`https://tiao.supliu.com.br/api/album?keyword=${albumName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'matheusmena1@hotmail.com'
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

// POST Album
export async function addNewAlbum(albumData) {
  try {
      await fetch('https://tiao.supliu.com.br/api/album', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    },
    body: JSON.stringify(albumData),
  });

  } catch (error) {
    console.error(error.message);
  }

};


// DELETE Album
export async function deleteAlbum(id) {
  try {
      await fetch(`https://tiao.supliu.com.br/api/album/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    }
  })
  } catch (error) {
    console.error(error.message);
  }
};

// DELETE Track
export async function deleteAlbumTrack(id) {
  try {
      await fetch(`https://tiao.supliu.com.br/api/track/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'matheusmena1@hotmail.com'
    },
  });
  } catch (error) {
    console.error(error.message);
  }
}

// POST track
export async function addNewTrack(trackData) {
  try {
     await fetch('https://tiao.supliu.com.br/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'matheusmena1@hotmail.com'
      },
      body: JSON.stringify(trackData),
    });
  } catch (error) {
    console.error(error.message);
  }
};

// Delete Track
export async function deleteTrack(id) {
  try {
     await fetch(`https://tiao.supliu.com.br/api/track/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'matheusmena1@hotmail.com'
      }
    })
  } catch (error) {
    console.error(error.message);
  }
};
