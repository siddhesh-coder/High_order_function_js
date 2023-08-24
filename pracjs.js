//High order function
const radius = [2,3,4,5,6]; //target

//Bullets
const area = function(r){
   return Math.PI * r * r;
};
const circumference = function(r){
   return 2 *Math.PI * r;
};
const diameter = function(r){
   return 2 * r;
};

//Gun
// const calculate = function(refr,logic){
//    const output = [];
//    for(let i=0;i<refr.length;i++){
//        output.push(logic(refr[i]));
//    }
//    return output;
// };

// //loader
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

//MAP
//if you use map no need of gun anymore pretty ease 

//loader
// console.log(radius.map(diameter));
// console.log(radius.map(area));
// console.log(radius.map(circumference));

//if you want to custom your own map like function


Array.prototype.calculate = function(logic){
      const output = [];
      for(let i=0;i<this.length;i++){
          output.push(logic(this[i]));
      }
      return output;
   };

   //loader
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
