var quotes = [
  {Quote : "Chandler was trapped in an ATM vestibule with what supermodel?"},

  {Quote : "How did Joey originally get cast in his soap opera?"},

  {Quote : "When Rachel and Phoebe go to get tattoos, what tattoo does Rachel choose?"},

  {Quote : "Who does Rachel dress up as to satisfy a Ross fantasy?"},

  {Quote : "What did Janice's first husband sell?"},

  {Quote : "Where were Chandler and Monica when they decided to start a family?"},

  {Quote : "What holiday does Chandler despise?"},

  {Quote : "In Las Vegas, what freak-show worthy discovery does Joey make?"},

];

exports.quotes = function() {
  var idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx].Quote;
};
