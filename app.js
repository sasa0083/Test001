console.log("Hello Node.js");
var steem = require("steem")
steem.api.setOptions({url: 'https://api.steemit.com'});
steem.api.getAccounts(['ned','dan'], function(err, response){
    console.log(err, response);
});


function foo() {
  if(false) {
    var a = 1;
  }
  console.log(a);
}

foo();

const a = 99999;

function foo1() {
  if(false) {
    let a = 1;
  }
  console.log(a);
}

foo1();
