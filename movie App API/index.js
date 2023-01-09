import navbar from "./components/navbar.js";
// // console.log(`navbar`,navbar)
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();


let data1 = [
    {
      name: "Tanhaji",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2886/892886-h",
      rating: 3,
    },
    {
      name: "Baaghi",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/700/600700-h",
      rating: 3.5,
    },
    {
      name: "Housefull ",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/2789/1000212789/1000212789-h",
      rating: 5,
    },
    {
      name: "MS Dhoni:",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3668/593668-h",
      rating: 8,
    },
    {
      name: "Total Dhamaal",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/700/600700-h",
      rating: 1,
    },
    {
      name: "Super",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9407/1279407-h-d92aabedf794",
      rating: 0,
    },
    {
      name: "Rocky",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2886/892886-h",
      rating: 7,
    },
    {
      name: "Mission Mangal",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1322/441322-h",
      rating: 5,
    },
    {
      name: "Hate Story ",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8879/1248879-h-1f47c914e0ee",
      rating: 1.7,
    },
    {
      name: "Bhool Bhulaiyaa",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6775/1036775-h-138417fb9e1f",
      rating: 7,
    },
    {
      name: "Tanhaji",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/5483/1770015483/1770015483-h",
      rating: 3.9,
    },
    {
      name: "Baby",
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/7132/1000007132/1000007132-h",
      rating: 8,
    },
  ];
  
  let parent = document.getElementById("carosel");
  
  function renderDom(data) {
    parent.innerText = null;
    data.forEach(function (ele) {
      let div = document.createElement("div");
      div.setAttribute = ("id", "div");
  
      let image = document.createElement("img");
      image.src = ele.url;
  
      let name = document.createElement("h1");
      name.innerText = ele.name;
  
      let rating = document.createElement("h2");
      rating.innerText = ele.rating;
  
      div.append(image, name, rating);
  
      parent.append(div);
    });
  }
     
  renderDom(data1);
  
  let sortbtn = document.getElementById("sortlh");
  sortbtn.addEventListener("click",check(a,b))
  
  
  let sortbtn2 = document.getElementById("sorthl");
  sortbtn2.addEventListener("click",check2())
  
  function check(a, b) {
    data1.sort((a, b) => {
      return a.rating - b.rating;
    });
    renderDom(data1);
  }
  function check2(a, b) {
    data1.sort((a, b) => {
      return b.rating - a.rating;
    });
    renderDom(data1);
  }



    renderDom(data) , check(a, b),check2(a, b) ;
  // http://www.omdbapi.com/?i=tt3896198&apikey=dcb87315
  //http://www.omdbapi.com/apikey.aspx?VERIFYKEY=f6e5f74f-be8f-4c8b-968c-a7f2c15e75f6