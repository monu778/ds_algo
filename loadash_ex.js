var _ = require('lodash')

var foo = {a:"a new  property"};
var bar = {b:4,c:"an other property"}
var result = _.assign({a:"an old property"},foo,bar);

console.log(result)

var result = _.times(5, function() {
    return Math.round(Math.random()*100);
})

console.log(result);

var users = [
    { firstName: "Sravan", lastName: "Reddy", age: 28, gender: "male" },
    { firstName: "Monu", lastName: "Reddy", age: 5, gender: "female" },
    { firstName: "Prasanna", lastName: "Kumari", age: 54, gender: "male" },
    { firstName: "Mokshith", lastName: "Gar", age: 11, gender: "female" }
  ];



var user = _.find(users,{firstName:'Sravan'});

console.log(user);

var underAgeUser = _.find(users, function(user) {
	return user.age < 18;
});

_.deburr("déjà vu");
// -> deja vu
_.deburr("Juan José");
// -> Juan Jose

var posts = [
    { id: "4abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." }
    // even more blog posts
];

posts = _.keyBy(posts, "id");


var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);

console.log(posts)
