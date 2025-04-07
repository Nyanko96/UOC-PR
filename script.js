// Conjunt de dades
class Comic {
    constructor(id, title, issueNumber, description, pageCount, thumbnail, price, creators, characters) {
      this.id = id;
      this.title = title;
      this.issueNumber = issueNumber;
      this.description= description;
      this.pageCount = pageCount;
      this.thumbnail = new Thumbnail;
      this.price = price;
      this.creators = creators;
      this.characters = characters;
    }
  	/*get carAntiguaty(){
    	return this.year;
    }
  	get getCarDescription(){
      return `${this.brand} ${this.model} ${this.horsePower}`;
    }
    set carAntiguaty(any){
      this.year = this.year - any;
    }*/
   getThumbnailURL(){

   }
}
class Thumbnail{
  constructor(path, extension){
    this.path = path;
    this.extension = extension;
  }
}
class Hero{
  constructor(id, name, description, modified, thumbnail, resourceURL, comics){
    this.id = id;
    this.name = name;
    this.description = description;
    this.modified = modified;
    this.thumbnail = thumbnail;
    this.resourceURL = resourceURL;
    this.comics = comics;
  }
  getThumbnailURL(){
    
  }
}
class Favorites{
  constructor(){
    this.comics[any];
  }
  addFavorite(comic){

  };
  removeFavorite(comicId){

  };
  showFavorites(){

  };
  addMultipleFavorites(...comics){

  };
  copyFavorites(){

  };
}

function findComicByld(){

};

function calculateAveragePrice(){

};
function addMultipleFavorites(){

};

function copyFavorites(){

};

function getAffordableComicTitles(){

};

const comics = [
  new Comic(1, "The Amazing Spider-Man", 101, "Spider-Man faces a new foe.", 32, "spiderman-thumbnail.jpg", 3.99, ["Stan Lee", "Steve Ditko"], ["Spider-Man", "Green Goblin"]),
  new Comic(2, "Batman: Year One", 1, "The origin story of Batman.", 48, "batman-thumbnail.jpg", 4.99, ["Frank Miller", "David Mazzucchelli"], ["Batman", "James Gordon"]),
  new Comic(3, "Superman: Red Son", 1, "Superman lands in the Soviet Union.", 45, "superman-thumbnail.jpg", 5.99, ["Mark Millar", "Dave Johnson"], ["Superman", "Wonder Woman"]),
  new Comic(4, "Wonder Woman: Bloodlines", 5, "Wonder Woman faces new challenges.", 40, "wonderwoman-thumbnail.jpg", 4.49, ["Greg Rucka", "Liam Sharp"], ["Wonder Woman", "Cheetah"]),
  new Comic(5, "X-Men: Days of Future Past", 2, "The X-Men battle for the future.", 56, "xmen-thumbnail.jpg", 6.99, ["Chris Claremont", "John Byrne"], ["Wolverine", "Storm"]),
  new Comic(6, "The Flash: Rebirth", 1, "Barry Allen returns as the Flash.", 38, "flash-thumbnail.jpg", 3.99, ["Geoff Johns", "Ethan Van Sciver"], ["The Flash", "Reverse-Flash"]),
  new Comic(7, "Thor: God of Thunder", 6, "Thor fights the God Butcher.", 52, "thor-thumbnail.jpg", 5.49, ["Jason Aaron", "Esad Ribic"], ["Thor", "Loki"]),
  new Comic(8, "Green Lantern: Blackest Night", 7, "Green Lantern faces the Black Lantern Corps.", 60, "greenlantern-thumbnail.jpg", 5.99, ["Geoff Johns", "Ivan Reis"], ["Green Lantern", "Sinestro"]),
  new Comic(9, "Deadpool: Merc with a Mouth", 1, "Deadpool in action-packed comedy.", 36, "deadpool-thumbnail.jpg", 3.99, ["Victor Gischler", "Bong Dazo"], ["Deadpool"]),
  new Comic(10, "Captain America: Civil War", 5, "Captain America vs Iron Man.", 50, "captainamerica-thumbnail.jpg", 4.99, ["Mark Millar", "Steve McNiven"], ["Captain America", "Iron Man"])
];

const heroes = [
  new Hero(1, "Spider-Man", "A web-slinging hero with incredible abilities.", "2025-04-06", "spiderman-thumbnail.jpg", "https://marvel.com/spiderman", ["The Amazing Spider-Man"]),
  new Hero(2, "Batman", "The dark knight who protects Gotham City.", "2025-04-07", "batman-thumbnail.jpg", "https://dc.com/batman", ["Batman: Year One"]),
  new Hero(3, "Superman", "The Man of Steel, defender of justice.", "2025-03-28", "superman-thumbnail.jpg", "https://dc.com/superman", ["Superman: Red Son"]),
  new Hero(4, "Wonder Woman", "The Amazon princess with an unbreakable spirit.", "2025-03-20", "wonderwoman-thumbnail.jpg", "https://dc.com/wonderwoman", ["Wonder Woman: Bloodlines"]),
  new Hero(5, "Wolverine", "A fierce mutant with adamantium claws.", "2025-03-15", "wolverine-thumbnail.jpg", "https://marvel.com/wolverine", ["X-Men: Days of Future Past"]),
  new Hero(6, "The Flash", "The Scarlet Speedster who defies time.", "2025-03-11", "flash-thumbnail.jpg", "https://dc.com/flash", ["The Flash: Rebirth"]),
  new Hero(7, "Thor", "The god of thunder wielding Mjölnir.", "2025-02-28", "thor-thumbnail.jpg", "https://marvel.com/thor", ["Thor: God of Thunder"]),
  new Hero(8, "Green Lantern", "A galactic hero wielding a power ring.", "2025-02-15", "greenlantern-thumbnail.jpg", "https://dc.com/greenlantern", ["Green Lantern: Blackest Night"]),
  new Hero(9, "Deadpool", "The Merc with a Mouth known for action-packed comedy.", "2025-02-01", "deadpool-thumbnail.jpg", "https://marvel.com/deadpool", ["Deadpool: Merc with a Mouth"]),
  new Hero(10, "Captain America", "The brave leader of the Avengers.", "2025-01-25", "captainamerica-thumbnail.jpg", "https://marvel.com/captainamerica", ["Captain America: Civil War"])
];
