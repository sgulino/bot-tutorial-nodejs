var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegex = /[Dd][Ii][Nn][Oo][Ss][Aa][Uu][Rr][Ss]?/;
  var botRegexH = /[Ff][Aa][Gg][Gg][Oo][Tt]/;
  var botRegexFP = /[Ff][Uu][Cc][Kk][ ][Yy][Oo][Uu]/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postDino();
    this.res.end();
  } else if(request.text && botRegexH.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else if(request.text && botRegexFP.test(request.text)) {
    this.res.writeHead(200);
    postFuckPoland();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postDino() {
  var botResponse, options, body, botReq;

  var pix = ["http://www.enchantedlearning.com/tgifs/Trexskelanim.gif","https://i.ytimg.com/vi/2AVqxPAs094/maxresdefault.jpg","https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2015/05/dn27454-1_600.jpg","http://www.ydlywood.bham.sch.uk/uploads/9/3/5/7/9357125/1473767_orig.png","http://www.startwithabook.org/sites/default/files/themes_dinosaurs.jpg","https://assets.answersingenesis.org/img/cms/content/contentnode/image/dinosaurs-and-the-bible.jpg","http://eandt.theiet.org/magazine/2015/05/images/640_indominus-rex.jpg","http://www.framestore.com/sites/default/files/styles/hero_720x406px/public/work/wwd1.jpg?itok=MDlAU7Hc","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeWNBGy8ISM7uBbreicDaH-xwTAGF_0AACSNHBAv3n-G_FPXQuA","https://i.ytimg.com/vi/nXbQTfedDpU/hqdefault.jpg","http://images.natureworldnews.com/data/images/full/21736/baby-chasmosaurus.jpg","http://www.dinosaurusi.com/video_slike/GHhVHvVR35-dinosaurs-dinosaurs_pictures-Tarbosaurus.jpg","https://a248.e.akamai.net/f/1202/1579/4m/i.dailymail.co.uk/i/pix/2011/04/06/article-1373836-09B2E95B000005DC-584_468x356.jpg","https://img.buzzfeed.com/buzzfeed-static/static/campaign_images/webdr01/2013/2/26/19/which-jurassic-park-dinosaur-are-you-1-14543-1361923481-0_big.jpg"];
  var rand = Math.floor(Math.random()*pix.length);
  
  botResponse = pix[rand];
  
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

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = "Homophobia will not be tolerated, you flat-footed cunt.";
  
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

function postDino() {
  var botResponse, options, body, botReq;
  
  botResponse = "and also, fuck poland";
  
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
