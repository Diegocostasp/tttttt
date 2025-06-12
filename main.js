const books = [
  {
    id: "1",
    title: "A Arte da Guerra",
    author: "Sun Tzu",
    url: "https://www.youtube.com/watch?v=hKoioiDpwrk",
    category: "Clássicos",
    subCategory: "Filosofia",
    coverImage: "https://placehold.co/300x180?text=Arte+da+Guerra"
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    url: "https://www.youtube.com/watch?v=POCs38Rputs",
    category: "Ficção",
    subCategory: "Distopia",
    coverImage: "https://placehold.co/300x180?text=1984"
  },
  {
    id: "3",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    url: "https://www.youtube.com/watch?v=DtBoAqkIJzI",
    category: "Clássicos",
    subCategory: "Literatura Brasileira",
    coverImage: "https://placehold.co/300x180?text=Dom+Casmurro"
  },
  {
    id: "4",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    url: "https://www.youtube.com/watch?v=nDbNRb9gOr4",
    category: "Infantil",
    subCategory: "Fábula",
    coverImage: "https://placehold.co/300x180?text=Pequeno+Principe"
  },
  {
    id: "5",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    url: "https://www.youtube.com/watch?v=E2b_bvTbDz8",
    category: "Não Ficção",
    subCategory: "História",
    coverImage: "https://placehold.co/300x180?text=Sapiens"
  },
  {
    id: "6",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    url: "https://www.youtube.com/watch?v=x8VYWazR5mE",
    category: "Ficção",
    subCategory: "Fantasia",
    coverImage: "https://placehold.co/300x180?text=O+Hobbit"
  },
  {
    id: "7",
    title: "Mindset",
    author: "Carol Dweck",
    url: "https://www.youtube.com/watch?v=RvlQ0FUlOYo",
    category: "Autoajuda",
    subCategory: "Psicologia",
    coverImage: "https://placehold.co/300x180?text=Mindset"
  },
  {
    id: "8",
    title: "O Segredo",
    author: "Rhonda Byrne",
    url: "https://www.youtube.com/watch?v=0Ngvc6AHC94",
    category: "Autoajuda",
    subCategory: "Motivacional",
    coverImage: "https://placehold.co/300x180?text=O+Segredo"
  }
];

const categorias = {
  "Clássicos": ["Filosofia", "Literatura Brasileira"],
  "Ficção": ["Distopia", "Fantasia"],
  "Infantil": ["Fábula"],
  "Não Ficção": ["História"],
  "Autoajuda": ["Psicologia", "Motivacional"]
};
let player, index = 0, isPlaying = false, isMuted = false, shuffle = false;

function getVideoId(url) {
  if (url.includes("watch?v=")) return new URL(url).searchParams.get("v");
  if (url.includes("/v/")) return url.split("/v/")[1];
  return url;
}

function isFavorite(id) {
  const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
  return fav.includes(id);
}

function toggleFavorite(id) {
  let fav = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (fav.includes(id)) fav = fav.filter(f => f !== id);
  else fav.push(id);
  localStorage.setItem("favorites", JSON.stringify(fav));
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function loadTrack() {
  player.loadVideoById(getVideoId(books[index].url));
}

function updatePlayPauseIcon() {
  const icon = document.querySelector("#playpause i");
  if (!icon) return;
  icon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
}

function updateTime() {
  if (player && player.getCurrentTime && player.getDuration) {
    const cur = player.getCurrentTime();
    const dur = player.getDuration();
    document.getElementById("timeDisplay").textContent =
      `${formatTime(cur)} / ${formatTime(dur)}`;
    document.getElementById("progress-bar").style.width = `${(cur / dur) * 100}%`;
    localStorage.setItem("currentAudiobookTime", cur);
  }
}

function renderBooks(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  list.forEach((book, i) => {
    const favClass = isFavorite(book.id) ? "text-red-500" : "text-gray-400";
    const div = document.createElement("div");
    div.className = "p-4 bg-gray-700 rounded";
    div.innerHTML = `
      <img src="${book.coverImage}" class="w-full mb-2 rounded">
      <h2 class="font-bold">${book.title}</h2>
      <p class="text-sm text-gray-300">${book.author}</p>
      <div class="flex justify-between items-center mt-2">
        <button class="bg-teal-500 px-2 py-1 rounded play-btn" data-index="${i}">▶️ Ouvir</button>
        <button class="fav-btn ${favClass}" data-id="${book.id}"><i class="fas fa-heart"></i></button>
      </div>`;
    container.appendChild(div);
  });

  document.querySelectorAll(".play-btn").forEach(btn => {
    btn.onclick = () => {
      index = parseInt(btn.dataset.index);
      loadTrack();
    };
  });

  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.onclick = () => {
      toggleFavorite(btn.dataset.id);
      renderAll();
    };
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
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
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
    isMuted ? player.mute() : player.unMute();
  };
  document.getElementById("shuffle").onclick = () => {
    shuffle = !shuffle;
    alert("Modo aleatório " + (shuffle ? "ativado" : "desativado"));
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

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0", width: "0",
    videoId: getVideoId(books[index].url),
    events: {
      onReady: (e) => {
        const time = parseFloat(localStorage.getItem("currentAudiobookTime")) || 0;
        e.target.seekTo(time);
      },
      onStateChange: (e) => {
        isPlaying = e.data === YT.PlayerState.PLAYING;
        updatePlayPauseIcon();
        if (e.data === YT.PlayerState.ENDED) {
          index = shuffle ? Math.floor(Math.random() * books.length) : (index + 1) % books.length;
          loadTrack();
        }
      }
    }
  });
}
