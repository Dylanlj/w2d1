module.exports = function getHTML (options, callback) {

  var https = require('https')
  var buffer = '';
  https.get(options, function(response){

    response.on('data', function(data){
      buffer += data
    })

    response.on('end', function(){
      callback(buffer)
    })
  })
  
};