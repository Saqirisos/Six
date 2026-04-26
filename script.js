const USER_ID = "1038593406148038778";

const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("music");
const card = document.getElementById("card");

enterScreen.addEventListener("click", async () => {
  enterScreen.classList.add("hide");

  try {
    music.volume = 0.35;
    await music.play();
  } catch (e) {
    console.log("Música bloqueada ou arquivo não encontrado.");
  }
});

async function getSpotify() {
  if (!card) return;

  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${USER_ID}`);
    const json = await res.json();

    if (json.data && json.data.listening_to_spotify) {
      const s = json.data.spotify;

      card.innerHTML = `
        <strong>ouvindo agora</strong><br>
        ${s.song}<br>
        <span style="opacity: .6">${s.artist}</span>
      `;
    } else {
      card.innerHTML = "não estou ouvindo nada agora";
    }
  } catch (e) {
    card.innerHTML = "erro ao carregar spotify";
  }
}

getSpotify();
setInterval(getSpotify, 5000);
