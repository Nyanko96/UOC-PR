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
const seat = new Car("seat", "ibiza", 20000, 200, 2023);
seat.carAntiguaty = 5;
console.log(seat.carAntiguaty);
console.log(seat.getCarDescription);


