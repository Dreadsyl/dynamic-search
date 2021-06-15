const container = document.querySelector(".container");

for (let i = 1; i <= 99; i++) {
  const circles = document.createElement("div");
  circles.classList.add("circle");
  container.appendChild(circles);
}

function generate() {
  anime({
    targets: ".circle",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    scale: function () {
      return anime.random(1, 5);
    },
  });
  setTimeout(() => {
    generate();
  }, 3000);
}

generate();

const search = document.querySelector(".search");
const google = document.getElementById("btn-g");
const youtube = document.getElementById("btn-y");
const duck = document.getElementById("btn-d");
const bing = document.getElementById("btn-b");

google.onclick = function () {
  let url = `https://www.google.com/search?q=${search.value}`;
  window.open(url, "_self");
};

youtube.onclick = function () {
  let url = `https://www.youtube.com/results?search_query=${search.value}`;
  window.open(url, "_self");
};

duck.onclick = function () {
  let url = `https://duckduckgo.com/?q=${search.value}`;
  window.open(url, "_self");
};

bing.onclick = function () {
  let url = `https://www.bing.com/search?q=${search.value}`;
  window.open(url, "_self");
};
