
ar = [1,2,3,4,5,6,7,8,9,10,11,12,14];

ar_length = len(ar);

total = (ar_length+1)*(ar_length+2)/2;
ar_total = 0;
for i in ar:
	ar_total = ar_total+i

total = total-ar_total;

print(total);
