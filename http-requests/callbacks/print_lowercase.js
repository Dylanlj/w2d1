var getHTML = require('./step6');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  var HTMLCode = html.toLowerCase()
  console.log(HTMLCode)

}

getHTML(requestOptions, printLowerCase);
