const USER_ID = "1038593406148038778";

const card = document.getElementById("card");
const music = document.getElementById("music");

document.getElementById("enter-screen").onclick = () => {
  document.getElementById("enter-screen").style.display = "none";
  music.play();
};

async function getSpotify() {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${USER_ID}`);
    const data = await res.json();

    if (data.data.listening_to_spotify) {
      const song = data.data.spotify;

      card.innerHTML = `
        <strong>♫ ouvindo agora</strong><br>
        ${song.song}<br>
        <span style="opacity:0.6">${song.artist}</span>
      `;
    } else {
      card.innerHTML = `não estou ouvindo nada agora`;
    }
  } catch {
    card.innerHTML = "erro ao carregar";
  }
}

setInterval(getSpotify, 5000);
getSpotify();
