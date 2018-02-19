var getHTML = require('./step6');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  var HTMLCode = html.toUpperCase()
  console.log(HTMLCode)

}

getHTML(requestOptions, printUpperCase);
