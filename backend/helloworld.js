function PrintLines(){
  console.log('Hello World')
  console.log('Second line')
}

// PrintLines()

// const Sentiment = require('sentiment');
// const sentiment = new Sentiment();
// const result = sentiment.analyze('Cats are reliable.');
// console.dir(result); // Score: -2, Comparative: -0.666

function sents(sentence){
  const Sentiment = require('sentiment');
  const sentiment = new Sentiment();
  return sentiment.analyze(sentence);
}

console.log(sents('Cats are wonderful'));
