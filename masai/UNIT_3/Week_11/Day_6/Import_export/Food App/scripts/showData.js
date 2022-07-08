async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  
 
  return data;
}

function append(data, place) {
  place.innerHTML =null;
  data.forEach((item) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = item.strMealThumb;

    let p_name = document.createElement("h2");
    p_name.textContent = item.strMeal;

    let p_cat = document.createElement("h3");
    p_cat.textContent = item.strCategory;

    let p_Area = document.createElement("h4");
    p_Area.textContent = item.strArea;

    let p_Steps = document.createElement("p");
    p_Steps.textContent = item.strInstructions;
    div.append(image, p_name, p_cat, p_Area, p_Steps);

    place.append(div);
  });
}
export { append, getData };
