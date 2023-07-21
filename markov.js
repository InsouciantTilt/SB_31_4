/** Textual markov chain generator */


class MarkovMachine {

    /** build markov machine; read in text.*/
  
    constructor(text) {
      let words = text.split(/[ \r\n]+/);
      this.words = words.filter(c => c !== "");
      this.makeChains();
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    makeChains() {
      var chains = {};
      for(var i=0; i<this.words.length; i++) {
        var word = this.words[i];
        var nextWord = this.words[i+1];

        if(!chains[word]){
          chains[word]=[]
        }
        if(nextWord){
          chains[word].push(nextWord);
        } else {
          chains[word].push(null);
        }
      }
      return chains;
    }
    
    /** return random text from chains */
      makeText(numWords = 100) {
      var output = [];
      var options = Object.keys(this.chains);
      var start = Math.floor(Math.random() * options.length);
      var word = options[start];

      output.push(word);

      while(text.length < numWords) {
        let nextIndex = Math.floor(Math.random() * this.chains[word].length);
        let nextWord = this.chains[nextIndex];
        if (nextWord){
          output.push(nextWord);
          word = nextWord
        } else break;
      }
      return output.join(' ');
    }
  }

  module.exports = MarkovMachine;