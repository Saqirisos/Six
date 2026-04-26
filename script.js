// EDITA TUDO AQUI, SEM CAÇAR NO CÓDIGO

const config = {
  enterTitle: "bem vindo ao inferno",
  enterSubtitle: "click to enter",

  name: "Six",

  bio: `eu ainda penso<br>mas já não digo mais nada`,
  about: `só aprendi a lidar com o que ficou`,

  spotifyUrl: "https://open.spotify.com/user/s3q266mq8jbsca79dc3tbyz3j?si=799b577b5d5f4300&nd=1&dlsi=b581cbcf1a7d46cf",
  discordUrl: "https://discord.gg/consumed",

  spotifyTitle: "Spotify",
  spotifyDesc: "sixconsumed",

  musicVolume: 0.35
};

// NÃO MEXE DAQUI PRA BAIXO SE NÃO PRECISAR

document.getElementById("enter-title").innerHTML = config.enterTitle;
document.getElementById("enter-subtitle").innerHTML = config.enterSubtitle;

document.getElementById("name").innerHTML = config.name;
document.getElementById("bio").innerHTML = config.bio;
document.getElementById("about").innerHTML = config.about;

document.getElementById("spotify-link").href = config.spotifyUrl;
document.getElementById("discord-link").href = config.discordUrl;

document.getElementById("spotify-title").innerHTML = config.spotifyTitle;
document.getElementById("spotify-desc").innerHTML = config.spotifyDesc;

const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("music");

music.volume = config.musicVolume;

enterScreen.addEventListener("click", () => {
  enterScreen.classList.add("hide");

  music.play().catch(() => {
    console.log("O navegador bloqueou o autoplay. Clique novamente.");
  });
});
