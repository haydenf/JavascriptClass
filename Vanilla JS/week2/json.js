var json = "[{\"name\":\"K.West\",\"nickname\":\"Yeezy\",\"dateOfBirth\":\"1977-06-08\"},{\"name\":\"A. Graham\",\"nickname\":\"Drake\",\"dateOfBirth\":\"1986-10-24\"}]";

obj = JSON.parse(json);

console.log(obj[0].name);
console.log(obj[0].nickname);
console.log(obj[0].dateOfBirth);

var jsonData = JSON.stringify(obj);
console.log(jsonData);