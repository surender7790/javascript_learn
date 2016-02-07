//Individual objects decleration
var hotel={

	name:'Alfonso',
	place:'Delhi',
	star:'3',
	rooms:102
};
console.log("Our Hotel "+hotel.name+" is a "+hotel.star+" star with quality service and have "+hotel.rooms+" rooms.It is located in "+hotel.place+".");
//Multiple objects
function cafe(name,tables){

	this.name=name;
	this.tables=tables;
}
var star=new cafe('"star"',25);
var latte=new cafe('"latte"',30);

console.log("Our cafe "+star.name+" have "+star.tables+" Tables");
console.log("Our cafe "+latte.name+" have "+latte.tables+" Tables");