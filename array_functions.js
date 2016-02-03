/*Array fuction builtIn
1.concat()
2.join()
3.length
4.pop()
5.push();
6.reverse()
7.shift()
8.splice()
9.sort()
10.toSource()
11.toString()
12.unshift()
13.valueOf()
*/


var hero=["Batman","superman","thor","Flash","Arrow"];
var villan=["loki","zedi","joker"];
var movie=hero.concat(villan);
var len=movie.length;
while(len--)
console.log(movie[len]);
console.log("We need villan to become a hero");
var hero_team=hero.join("+");
var villan_team=villan.join("+");
console.log(hero_team);
console.log(villan_team);
var no_ofHero=hero.length;
var no_ofVillan=villan.length;
console.log("Hero="+no_ofHero+" and Villan="+no_ofVillan);
console.log("Number of hero is more let them Die!");
console.log("Die!");
console.log("Die!");
console.log("Die!");
hero.pop();
console.log("Arrow Died!");
console.log("Why so Serious");
console.log("Batman Next is You");
console.log("Bane is coming!");
villan.push("Bane");
console.log("Villans!!");
while(no_ofVillan--)
console.log(villan[no_ofVillan]);
console.log(villan[3]);
 no_ofHero=hero.length;
no_ofVillan=villan.length;
console.log("Hero="+no_ofHero+" and Villan="+no_ofVillan);
villan.reverse();
hero.reverse();
console.log("Their orders are reversed");
//shift() removes first element and returns it.
console.log(hero.shift()+" Out with gf");
//array.splice(index,remove_how_many,item1,item2....)
villan.splice(1,0,"Lady Shiva","Bedbug","Ferek");
no_ofHero=hero.length;
no_ofVillan=villan.length;
console.log("Hero="+no_ofHero+" and Villan="+no_ofVillan);
hero.sort();
villan.sort();
console.log(hero.toString());
console.log(villan.toString());
//The unshift() method adds new items to the beginning of an array, and returns the new length.
console.log("Flash is back");
hero.unshift("Flash");
console.log(hero.toString());
//The valueOf() method returns the array.
console.log(villan.valueOf());
