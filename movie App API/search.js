// import navbar from "./components/navbar.js";
// // console.log(`navbar`,navbar)
// let navbar_div = document.getElementById("navbar");
// navbar_div.innerHTML = navbar();
// import navbar from "./components/navbar.js";
// console.log(`navbar`,navbar)
// let navbar_div = document.getElementById("navbar");
// navbar_div.innerHTML = navbar;


let parent = document.getElementById("carosel1");
let images = [
  `https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/5477/1770015477/1770015477-h`,
  `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1300/1351300-h-57705cab5962`,
  `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h`,
  `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2212/1042212-h-0e83e926cfc1`,
  `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3668/593668-h`,
  `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e`,
];

let img = document.createElement("img");
img.src = images[0];
div1.append(img);
showData();

let i = 1;

function showData() {
  let div1 = document.getElementById("div1");

  setInterval(function () {
    if (i === images.length) {
      i = 0;
    }
    img.src = images[i];
    i++;
    // console.log(i);
  }, 3000);

  div1.append(img);
  parent.append(div1);
}
showData();

async function searchMovies() {
  let movie_name = document.getElementById(`movie_name`).value;

  let loader_div = document.getElementById("loader_div");
  loader_div.style.display = `block`;
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=dcb87315&s=${movie_name}`
    );

    let data = await response.json();
    let actual_data = data.Search;
    // console.log(`actual_data`, actual_data);
    appendMovie(actual_data);
  } catch (err) {
    console.log(`err`, err);
  }
}

//http://www.omdbapi.com/?apikey=dcb87315&

// apikey=dcb87315
// http://www.omdbapi.com/?i=tt3896198&apikey=dcb87315

function appendMovie(data) {
  let loader_div = document.getElementById("loader_div");
  loader_div.style.display = `none`;
  movies.innerText = null;
  data.forEach(function (el) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.Poster;
    let p_name = document.createElement("h1");
    p_name.innerText = el.Title;
    div.append(img, p_name);
    movies.append(div);
  });
}
function debouncing(func,delay){


  if (timerID){
    clearTimeout(timerID)
  }
  var timerID = setTimeout(function(){
    func()
  },delay)
}