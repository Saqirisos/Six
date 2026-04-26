const USER_ID = "1038593406148038778";

const enter = document.getElementById("enter-screen");
const music = document.getElementById("music");
const card = document.getElementById("card");

enter.addEventListener("click", async () => {
  enter.classList.add("hide");

  try {
    music.volume = 0.3;
    await music.play();
  } catch {}
});

async function updateSpotify() {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${USER_ID}`);
    const json = await res.json();

    if (!json.success || !json.data.listening_to_spotify) {
      card.innerHTML = `
        <div class="album-placeholder"></div>
        <div class="track-info">
          <b>nada tocando</b>
          <span>spotify offline</span>
          <div class="progress"><div id="progress-bar"></div></div>
        </div>
      `;
      return;
    }

    const s = json.data.spotify;
    const start = s.timestamps.start;
    const end = s.timestamps.end;
    const percent = Math.min(100, Math.max(0, ((Date.now() - start) / (end - start)) * 100));

    card.innerHTML = `
      <img src="${s.album_art_url}" class="album-cover">
      <div class="track-info">
        <b>♫ ${s.song}</b>
        <span>${s.artist}</span>
        <div class="progress">
          <div id="progress-bar" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  } catch {
    card.innerHTML = `
      <div class="album-placeholder"></div>
      <div class="track-info">
        <b>erro</b>
        <span>lanyard offline</span>
        <div class="progress"><div id="progress-bar"></div></div>
      </div>
    `;
  }
}

updateSpotify();
setInterval(updateSpotify, 3000);
