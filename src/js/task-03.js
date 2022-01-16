const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector(".gallery");
// gallery.style.display = "flex";
// gallery.style.flexWrap = "wrap";
// gallery.style.justifyContent = "center";

// for (let i = 0; i < images.length; i += 1) { 
//   const img = document.createElement("img");
//   img.src = images[i].url;
//   img.alt = images[i].alt;
//   const item = document.createElement("li");

//   item.append(img);
//   gallery.append(item);

//   img.style.display = "block";
//   img.style.width = "500px";
//   item.style.listStyle = "none";
//   item.style.margin = "10px";

// }

// console.log(gallery);

const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.justifyContent = "center";

const markup = images.map((image) => `<li class="gallery-item"><img class="gallery-img" width="500px" src="${image.url}" alt="${image.alt}"></li>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup);

console.log(gallery);


  


