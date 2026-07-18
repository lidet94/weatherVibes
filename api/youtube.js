import { playlistIds } from "../data/moods.js";

let player;
let selectedPlaylistId = "";
let isScriptInjected = false;

window.onYouTubeIframeAPIReady = function () {

  player = new YT.Player("player", {
    width: "100%",
    playerVars: {
      listType: "playlist",
      list: selectedPlaylistId,
      autoplay: 1,
      origin: window.location.origin,
      rel: 0,
    },
    events: {
      onReady: (event) => {
        event.target.playVideo();
      },
      onError: (event) => {

        console.error("YouTube Player structural error code:", event.data);
      }
    }
  });
};

export function loadMusic(condition) {
  const cleanCondition = condition.toLowerCase().trim();
  const playlistData = playlistIds[cleanCondition];

  if (!playlistData) {
    console.error(`No playlist found for condition: ${cleanCondition}`);
    return;
  }


  const id = typeof playlistData === "object" ? playlistData.playlistId : playlistData;
  selectedPlaylistId = id;


  if (player && typeof player.loadPlaylist === "function") {

    player.loadPlaylist({
      listType: "playlist",
      list: id,
      index: 0,
      startSeconds: 0
    });
    return;
  }

  if (!isScriptInjected) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    isScriptInjected = true;
  }
}