var questions = [
  "Chandler was trapped in an ATM vestibule with what supermodel?",
  "How did Joey originally get cast in his soap opera?",
  "When Rachel and Phoebe go to get tattoos, what tattoo does Rachel choose?",
  "Who does Rachel dress up as to satisfy a Ross fantasy?",
  "What did Janice's first husband sell?",
  "Where were Chandler and Monica when they decided to start a family?",

];

exports.askQuestion = function() {
  var idx = Math.floor(Math.random() * questions.length);
  return questions[idx];
};
