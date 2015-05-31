var fs = require('fs');
var posts = [];

module.exports = {
  setUp: function(callback) {
    var filenames = fs.readdirSync('_posts/');
    filenames.forEach(function(file) {
      posts.push([file, fs.readFileSync('_posts/' + file, 'utf-8')]);
    });
    callback();
  },

  tearDown: function(callback){
    callback();
  },

  // https://css-tricks.com/words-avoid-educational-writing/
  avoidTheseWords: function (test) {
    posts.forEach(function(post){
      var file = post[0];
      var body = post[1];

      var matchWords = body.match(/\bobviously\b|\bbasically\b|\bsimply\b|\bclearly\b|\bjust\b|\beveryone knows\b|\bhowever\b|\bso\b|\bturns out\b/ig);
      var message = '';
      if (matchWords) {
        message = '\n' + file + ':\n' + matchWords.length + ' avoidable words. \n  * ' + matchWords.join('\n  * ');
      }
      test.equal(matchWords, null, message);
    });
    test.done();
  }
};
