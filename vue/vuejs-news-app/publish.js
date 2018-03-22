var ghPages = require('gh-pages');
var path = require('path');

ghPages.publish(path.join(__dirname, 'dist'), function (err) {
  console.log("Error occured", err);
})
