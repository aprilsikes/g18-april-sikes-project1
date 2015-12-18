var quotes = [
  {Quote : "We were on a break!! -Ross"},

  {Quote : "How you doin'? -Joey"},

  {Quote : "Otherwise, it's just a moo point. It's like a cow's opinion. It doesn't matter. It's moo. -Joey"},

  {Quote : "I grew up in a house with Monica, okay. If you didn't eat fast, you didn't eat. -Ross"},

  {Quote : "I'm not so good with the advice...Can I interest you in a sarcastic comment? -Chandler"},

  {Quote : "It is a love based on giving and receiving as well as having and sharing. And the love that they give and have is shared and received. And through this having and giving and sharing and receiving, we too can share and love and have...and receive. -Joey"},

  {Quote : "I'm Rachel. I love Ross. I hate Ross. I love Ross. I hate Ross. -Monica"},

  {Quote : "I'm Joey. I'm disgusting. I make low-budget adult films. -Joey"},

  {Quote : "'Sup with the whack Playstation, 'sup? -Joey"},

  {Quote : "Hey, just so you know: it's not that common, it doesn't happen to every guy, and it is a big deal! -Rachel"},

  {Quote : "All right, you will notice that I am fully dressed. I, in turn, have noticed that you are not. So in the words of A. A. Milne, Get out of my chair, dillhole! -Chandler"},

  {Quote : "They don't know that we know they know we know! -Phoebe"},

  {Quote : "What if the husband person is the wrong guy, and you are the right guy. I mean you don't get chances like this all the time, if you don't meet her now, you're gonna be kicking yourself when you're 80, which is hard to do, and that's how you break a hip. -Phoebe"},

  {Quote : "Married a lesbian, left a man at the altar, married a gay ice dancer, threw a girl's wooden leg in the fire, live in a box! -Monica"},

  {Quote : "Gum would be perfection. -Chandler"},

  {Quote : "Isn't that just kick-you-in-the-crotch, spit-on-your-neck, fantastic! -Rachel"},

  {Quote : "I may play the fool at times but I'm more than just a pretty blonde girl with an ass that won't quit. -Phoebe"},

  {Quote : "Va fa napoli! -Joey"},

  {Quote : "I got Rachel shoving your underwear in my face and asking when she can come see me star in Ugly Woman! -Joey"}

];

exports.quotes = function() {
  var idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx].Quote;

};
