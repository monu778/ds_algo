def f1(x=1,y=2):
	x=x+y
	y+=1
	print(x,y)

f1(y=2,x=1)

A = [(10,20,30,40,50),["Wipro","Oracle","Microsoft"]]

print type(A[1])

str = "hello"
str[:2]
print(str)


boxes = {}

jar={}
crates = {}

boxes["ceral"] = 1

boxes["candy"]=2

jar['honey']=4

crates["boxes"]=boxes

crates["jars"]=jar

print len(crates[boxes]);

