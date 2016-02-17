var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegex = /[Dd][Ii][Nn][Oo][Ss][Aa][Uu][Rr][Ss]?/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

  //var pix = ["http://www.enchantedlearning.com/tgifs/Trexskelanim.gif","https://i.ytimg.com/vi/2AVqxPAs094/maxresdefault.jpg","http://vignette1.wikia.nocookie.net/walkingwithdinos/images/0/0f/Scary.png/revision/latest?cb=20140121044645","http://www.ydlywood.bham.sch.uk/uploads/9/3/5/7/9357125/1473767_orig.png","http://www.startwithabook.org/sites/default/files/themes_dinosaurs.jpg"];
  //var rand = Math.floor(Math.random()*pix.length);
  
  //botResponse = pix[rand];
  botResponse = "DINOSAURS";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
