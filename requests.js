//my nodejs file requests.js, to run it >> node requests.js

//FIX 1: 'htt' --> 'http
var http = require('http');
//FIX 2: "var myname = functon" --> "function myname"
//FIX 3: Now returns a string rather than logging to console
function myname(){
  return "Here is my IP address";
}
//FIX 4: Added async to this function
//FIX 5: callHttpbi --> callHttpbin
async function callHttpbin() {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
        str += data;
      });
      response.on('end', function() {
        var result = JSON.parse(str);
        myips = result.origin;
        //FIX 6: Promise now returns the ip when it resolves
        resolve(myips)
      });
     }
    );
});
let result = await promise;
//FIX 7: Now returns the result
return result;
}
//FIX 8: added async to this function as well
async function executeAsyncTask(){
  const valueA = await callHttpbin()
  const valueB = myname();
  console.log(valueB+" "+valueA)
  //FIX 9: Added missing bracket below
}
//FIX 10: Added a function call so the program runs properly
executeAsyncTask()
// Output Here is my IP address 99.57.80.77