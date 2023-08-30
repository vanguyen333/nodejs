const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); //same result with console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host); //mywebsite.com:8000
//Host name (does not get port number)
console.log(myUrl.hostname); //hostname wont get the port number: mywebsite.com

// Pathname
console.log(myUrl.pathname); //hello.html

//Serialized query
console.log(myUrl.search); //?id=100&status=active

//Para object
console.log(myUrl.searchParams); //URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.search); //?id=100&status=active&abc=123

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
//id:100
// status:active
// abc:123
