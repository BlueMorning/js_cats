const Cats = function(){
  this.catsList         = [];
  this.catsListFiltered = [];
}


Cats.prototype.populate = function(){

  cat1      = new Cat(1, "Boba", "Sock fluff",          "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  cat2      = new Cat(2, "Barnaby", "Tuna",             "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
  cat3      = new Cat(3, "Max", "Whiskas Temptations",  "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
  this.catsList.push(cat1);
  this.catsList.push(cat2);
  this.catsList.push(cat3);

  this.catsListFiltered = this.catsList;
}

Cats.prototype.addNewCat = function (cat){
  this.catsList.unshift(cat);
}

Cats.prototype.removeFirstCat = function(){
  this.catsListFiltered.shift();
}

Cats.prototype.searchCats = function(searchName){
  this.catsListFiltered = this.catsList.filter(function(cat){
    return cat.name.toLowerCase().includes(searchName.toLowerCase());
  });
}
