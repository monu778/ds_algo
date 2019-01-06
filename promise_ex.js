var a = 2;
var p  = new Promise(function(resolve,reject) {
	if(a==2) {

	setTimeout(function() { 
		resolve("This is a Evennumber");
         },2000);
        }else if ( a==9) {
             resolve(" This is odd number");

        } else {
           reject('fail');

       } 
});


/*p.then(function(result) {

	console.log(result)
}).catch(function(e) {
 
   console.log("catch",e);
});*/
       
a = 7;	
var p1 = new Promise(function(resolve,reject) {
	if(a == 7) {

          setTimeout(function() { resolve("This is prime number:"); }, 1000);
         } else {
		reject("Its not a prime number");
         }
});

/*p1.then(function(result) {
	console.log(result)
}).catch(function(e) {
	console.log("Catche",e);
});*/


Promise.all([p,p1]).then(function(results) {

	console.log(results);
}).catch(function(err) {
	console.log('Catch:',err);

});

Promise.race([p,p1]).then(function(one) {

	console.log("Then",one);
}).catch(function(one,two) {
	console.log("Catch:",one) 
});




