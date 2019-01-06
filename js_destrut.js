//Object destructuring

var obj1 = {x:0,y:10,width:15,height:20}

var {x1,y,width,height}  = obj1;

console.log(x1,y,width,height);



// Array destructuring
var [x,,...rem] = [1,2,3,4]

var[y,...z] = [1,2,3,4,5]


console.log(x,rem,z)

var x=1,y=2;

[x,y]= [y,x]

console.log("after swapping=",x,y);


