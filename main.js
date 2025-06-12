let books = [];
let categorias = {};
let index = 0;
let player;
let isPlaying = false;
let isMuted = false;
let shuffle = false;
let repeat = false;

let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let jaLido = JSON.parse(localStorage.getItem("jaLido") || "[]");
let ouvirDepois = JSON.parse(localStorage.getItem("ouvirDepois") || "[]");

function getVideoId(url) {
  const match = url.match(/[?&]v=([^&#]*)|\/v\/([^&#]*)/);
  return match ? (match[1] || match[2]) : "";
}

function isFavorite(id) { return favorites.includes(id); }
function isJaLido(id) { return jaLido.includes(id); }
function isOuvirDepois(id) { return ouvirDepois.includes(id); }

function toggleList(id, listName, storageKey) {
  const list = JSON.parse(localStorage.getItem(storageKey) || "[]");
  const i = list.indexOf(id);
  if (i >= 0) list.splice(i, 1); else list.push(id);
  localStorage.setItem(storageKey, JSON.stringify(list));
  renderAll();
}

function renderBooks(arr, containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  arr.forEach((b, i) => {
    const div = document.createElement("div");
    div.className = "bg-gray-700 p-2 rounded";
    div.innerHTML = `
      <img src="${b.coverImage}" alt="${b.title}" class="w-full mb-2">
      <h4 class="text-lg font-bold">${b.title}</h4>
      <p>${b.author}</p>
      <button class="text-teal-300 underline mt-1" onclick="playBook(${books.indexOf(b)})">Ouvir</button>
      <div class="mt-1">
        <button onclick="toggleList('${b.id}', favorites, 'favorites')">⭐</button>
        <button onclick="toggleList('${b.id}', jaLido, 'jaLido')">✅</button>
        <button onclick="toggleList('${b.id}', ouvirDepois, 'ouvirDepois')">🕒</button>
      </div>`;
    el.appendChild(div);
  });
}

function renderCategories() {
  const catList = document.getElementById("category-list");
  catList.innerHTML = "";
  for (const cat in categorias) {
    const div = document.createElement("div");
    div.innerHTML = `<h3 class="font-bold text-lg">${cat}</h3>`;
    const ul = document.createElement("ul");
    categorias[cat].forEach(sub => {
      const li = document.createElement("li");
      li.innerHTML = `<button class="text-teal-300 hover:underline" data-cat="${cat}" data-sub="${sub}">${sub}</button>`;
      li.querySelector("button").onclick = () => {
        const filtered = books.filter(b => b.category === cat && b.subCategory === sub);
        renderBooks(filtered, "audiobook-list");
        showPage("home");
      };
      ul.appendChild(li);
    });
    div.appendChild(ul);
    catList.appendChild(div);
  }
}

function renderAll() {
  renderBooks(books, "audiobook-list");
  renderBooks(books.filter(b => isFavorite(b.id)), "favorite-list");
  renderBooks(books.filter(b => isJaLido(b.id)), "ja-lido-list");
  renderBooks(books.filter(b => isOuvirDepois(b.id)), "ouvir-depois-list");
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function playBook(i) {
  index = i;
  loadTrack();
}

function loadTrack() {
  const book = books[index];
  const videoId = getVideoId(book.url);
  if (player && player.loadVideoById) {
    player.loadVideoById(videoId);
  }
  document.getElementById("player-info").innerText = `${book.title} - ${book.author}`;
}

function updateTime() {
  if (!player || typeof player.getCurrentTime !== "function") return;
  const current = player.getCurrentTime();
  const total = player.getDuration();
  const progressEl = document.getElementById("progress");
  const ratio = total ? (current / total) * 100 : 0;
  progressEl.style.width = ratio + "%";

  // Save time and index
  localStorage.setItem("currentAudiobookTime", current);
  localStorage.setItem("lastIndex", index);
}

function updatePlayPauseIcon() {
  document.getElementById("playpause").innerText = isPlaying ? "⏸️" : "▶️";
}

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("https://raw.githubusercontent.com/Diegocostasp/tttttt/refs/heads/main/data.json");
  const json = await res.json();
  books = json.books;
  categorias = json.categorias;
  renderAll();
  renderCategories();
  showPage("home");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.onclick = () => {
      showPage(btn.dataset.page);
      if (btn.dataset.page === "home") renderAll();
    };
  });

  document.getElementById("playpause").onclick = () => {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
  };
  document.getElementById("next").onclick = () => {
    index = (index + 1) % books.length;
    loadTrack();
  };
  document.getElementById("prev").onclick = () => {
    index = (index - 1 + books.length) % books.length;
    loadTrack();
  };
  document.getElementById("mute").onclick = () => {
    isMuted = !isMuted;
    if (!player) return;
    isMuted ? player.mute() : player.unMute();
  };
  document.getElementById("shuffle").onclick = () => {
    shuffle = !shuffle;
    alert("Modo aleatório " + (shuffle ? "ativado" : "desativado"));
  };
  document.getElementById("repeat").onclick = () => {
    repeat = !repeat;
    alert("Repetição " + (repeat ? "ativada" : "desativada"));
  };
  document.getElementById("progress-container").onclick = (e) => {
    const ratio = e.offsetX / e.currentTarget.offsetWidth;
    const dur = player.getDuration();
    player.seekTo(dur * ratio);
  };
});

setInterval(() => {
  updateTime();
  updatePlayPauseIcon();
}, 1000);

// YouTube Player API callback
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "",
    events: {
      onReady: () => {
        const time = parseFloat(localStorage.getItem("currentAudiobookTime")) || 0;
        const lastIndex = parseInt(localStorage.getItem("lastIndex")) || 0;
        index = lastIndex;
        const videoId = getVideoId(books[index].url);
        player.loadVideoById(videoId, time);
        document.getElementById("player-info").innerText = `${books[index].title} - ${books[index].author}`;
      },
      onStateChange: (e) => {
        isPlaying = e.data === YT.PlayerState.PLAYING;
        updatePlayPauseIcon();
        if (e.data === YT.PlayerState.ENDED) {
          if (repeat) {
            player.seekTo(0);
            player.playVideo();
          } else {
            index = shuffle ? Math.floor(Math.random() * books.length) : (index + 1) % books.length;
            loadTrack();
          }
        }
      }
    }
  });
}
