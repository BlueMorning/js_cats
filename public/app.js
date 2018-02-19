const cats = new Cats();
cats.populate();

const addCat = function(cat){

    const ulElement = document.createElement("ul");
    const liName    = document.createElement("li");
    const liFood    = document.createElement("li");
    const liImage   = document.createElement("li");

    liName.innerText  = `Name: ${cat.name}`;
    liFood.innerText  = `Favourite food: ${cat.favouriteFood}`;

    const catImage        = document.createElement("img");
    catImage.src          = cat.imageUrl;
    catImage.style.width  = "200px";
    liImage.appendChild(catImage);

    ulElement.appendChild(liName);
    ulElement.appendChild(liFood);
    ulElement.appendChild(liImage);

    return ulElement;
}

const populateCats = function(){

  if(document.getElementById("cats_list") != null){
    while(document.getElementById("cats_list").hasChildNodes()){
      document.getElementById("cats_list").firstChild.remove();
    }
  }

  const div_cats_List    = document.getElementById("cats_list");
  const section          = document.createElement("section");
  section.id             = "cats";
  div_cats_List.appendChild(section);

  cats.catsListFiltered.forEach(function(cat){
    section.appendChild(addCat(cat));
  });
}

const setPage = function(){
  document.getElementById("addNewCat").onclick = addNewCat;
  document.getElementById("removeCat").onclick = removeCat;
  document.getElementById("search_cat_name").addEventListener("keyup", function(event){
    searchCats(document.getElementById("search_cat_name").value);
  }, false);
  populateCats();
}

function searchCats(catName){
  cats.searchCats(catName);
  populateCats();
}

document.addEventListener("DOMContentLoaded", setPage);


function addNewCat(){
  let name  = document.getElementById("cat_name").value;
  let food  = document.getElementById("cat_food").value;
  let image = document.getElementById("cat_image").value;
  let cat   = new Cat(cats.catsList.length, name, food, image);
  cats.addNewCat(cat);
  populateCats();
}

function removeCat(){
  cats.removeFirstCat();
  populateCats();
}
