import { playlistIds } from "../data/moods.js";


let player: YT.Player | undefined;
let selectedPlaylistId= "";
let isScriptInjected = false;

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

// When YouTube API script is ready, create the music player
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

// Load the correct playlist based on the current mood
export function loadMusic(condition: string) {
  const cleanCondition = condition.toLowerCase().trim();
  const playlistData = playlistIds[cleanCondition];

  if (!playlistData) {
    console.error(`No playlist found for condition: ${cleanCondition}`);
    return;
  }


  const id = typeof playlistData === "object" ? playlistData.playlistId : playlistData;
  selectedPlaylistId = id;

  // If player already exists, switch playlist without reloading
  if (player && typeof player.loadPlaylist === "function") {

    player.loadPlaylist({
      listType: "playlist",
      list: id,
      index: 0,
      startSeconds: 0
    });
    return;
  }

  // Inject the YouTube IFrame API script into the page
  if (!isScriptInjected) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName('script')[0];
     
    if(firstScriptTag){
        if(firstScriptTag.parentNode){
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }
    isScriptInjected = true;
  }
}