//Q1. 

// class Movie{
//     constructor(title, studio, ratings="PG"){
//         this.title = title;
//         this.studio = studio;
//         this.ratings = ratings;
//     }
// }

// var obj = new Movie("Casino Royale","Eon Productions", "PG13")
// console.log(obj.title);
// console.log(obj.studio);
// console.log(obj.ratings);

//Q2.ClassDiagram_Circle

class circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius}, color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferanceCircle(){
        return 2 * Math.PI * this.radius;
    }
}

var obj1 = new circle(1.0, "red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2;
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferanceCircle);

