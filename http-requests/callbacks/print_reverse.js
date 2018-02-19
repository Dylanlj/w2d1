var getHTML = require('./step6');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var startReverse = html.indexOf("pre") + 4;
  var endReverse = html.lastIndexOf("pre") - 3;

  var reversed = html.slice(0, startReverse);

  for(var i = endReverse; i > startReverse; i--){

    reversed += html[i]
  }

  reversed += "\n" + html.slice(endReverse, html.length - 1);
 console.log(reversed)

}

getHTML(requestOptions, printReverse);