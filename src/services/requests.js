

// export async function requestAlbums() {
// const response = await fetch(`https://tiao.supliu.com.br/api/album`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'matheusmena1@hotmail.com'
//     },
//   });

// const result = await response.json();
// return result;
// }


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