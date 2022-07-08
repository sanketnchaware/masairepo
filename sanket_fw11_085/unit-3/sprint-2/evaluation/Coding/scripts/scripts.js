async function Latest() {
  let res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fb9abe48a528423db59fa3ebe3fabdfb`
  );
  let data = await res.json();
  console.log(data.articles);
  Append(data.articles);
}

function Append(arr) {
  let content_div = document.getElementById("right");

  arr.forEach(function (item) {
    let div = document.createElement("div");
    div.setAttribute("id", "News_div");

    let div1 = document.createElement("div");
    let title = document.createElement("p");
    title.textContent = item.title;
    let author = document.createElement("p");
    author.textContent = item.author;
    let date = document.createElement("p");
    date.textContent = item.publishedAt;
    div1.append(title, author, date);

    let div2 = document.createElement("div");
    let des = document.createElement("p");
    des.textContent = item.description;
    div2.append(des);

    let div3 = document.createElement("div");
    let image = document.createElement("img");
    image.src = item.urlToImage;
    div3.append(image);

    div.append(div1, div2, div3);
    content_div.append(div);
  });
}

export default Latest;
