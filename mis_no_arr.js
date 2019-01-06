let ar= [1,2,3,4,5,6,7,8,9,10,12,13,14];
let ar_length = ar.length;
total = ((ar_length+1)*(ar_length+2))/2;
ar_total = 0;
for (i in ar) {
	ar_total = ar_total+ar[i];
}
total = total-ar_total;

console.log("missing Number:",total);
	

