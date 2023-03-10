var http = require('http');
let fs = require('fs')

var server = http.createServer(function (petition, answer){
    fs.readFile('helloWorld.txt', 'utf-8', function(err, data){
        if(err){
            console.log('error: ', err);
        }else{
            answer.end(data);
        }
    })
});

server.listen(3002, function(){
    console.log('The server is ready in port ' + this.address().port)
});