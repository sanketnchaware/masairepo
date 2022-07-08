async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}



async function append(data, place) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerText = el.title;

    let img = document.createElement("img");
    img.src = el.image;

    let p_price = document.createElement("p");
    p_price.innerText = el.price;

    div.append(img, p_name, p_price);
    place.append(div);
  })
}


export{append,getData}