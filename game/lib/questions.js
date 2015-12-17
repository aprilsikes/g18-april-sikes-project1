var questions = [
  {"Question" : "Chandler was trapped in an ATM vestibule with what supermodel?", "Answer" : "Jill Goodacre"},

  {"Question" : "How did Joey originally get cast in his soap opera?", "Answer" : "He slept with the casting director"},

  {"Question" : "When Rachel and Phoebe go to get tattoos, what tattoo does Rachel choose?", "Answer" : "A heart"},

  {"Question" : "Who does Rachel dress up as to satisfy a Ross fantasy?", "Answer" : "Princess Leia"},

  {"Question" : "What did Janice's first husband sell?", "Answer" : "Mattresses"},

  {"Question" : "Where were Chandler and Monica when they decided to start a family?", "Answer" : "In a hospital"},

  {"Question" : "What holiday does Chandler despise?", "Answer" : "Thanksgiving"},

  {"Question" : "In Las Vegas, what freak-show worthy discovery does Joey make?", "Answer" : "His identical hand twin"},

];

exports.askQuestion = function() {
  var idx = Math.floor(Math.random() * questions.length);
  return questions[idx];
};
