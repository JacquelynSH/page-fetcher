// Implement a node app (file?) that takes in two command line arguments (1. a url 2. a local file path)
// It should download the resource at the URL to the local path on your machine. Upon completion,
//  it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
/* use - node fetcher.js http://www.example.edu/ ./index.html */

//  You need to make an http request and wait for the response.
// after the http reuqest is complete you need to take the data you receive
//and write it to a file in your local filesystem.

// use nodes fs module to write the file
// use the callback based approach

//requiring fs and request
const fs = require('fs');
const request = require('request');

//storing our command line arguments and slicing off the 1st two
const myArgs = process.argv.slice(2);
// using request to make a request
//passing in argument at index 0 (url)
// checking for an error and exiting if there is one
request(myArgs[0], function(error, response, body) {
  if (error) {
    // console.log(error)
    console.error(error);
    process.exit(1);
  }
  // using fswrite to create a file, passing in arg file name from index 1.
  // checking for error as well
  fs.writeFile(myArgs[1], body, 'utf-8', err => {
    if (err) {
      process.exit(1);
    }
  });
});


