const Misc = require('./misc'); 
const Words = require('./words'); 

const Game = class { 
    constructor(dat) { 
        // Basic game setup 
      this.words = { ...dat}; 
      console.log(this); 
    } 

/*    randTargetValue(currVal) {
        var tmpVal = currVal; 
        while (tmpVal == currVal || this.mines.minesArray.indexOf(tmpVal) >= 0) {
            tmpVal = Misc.getRandomNum(this.firstNumber, this.totNumbers);  // Math.floor(Math.random() * this.totNumbers) + 1;  
        }		
        return tmpVal; 
    }*/

    getWords() {
      console.log('getWords called'); 
      this.words = new Words({job: 2, adj: 8, verb: 1, noun: 1, nounplural: 1, nounitem: 1, indicators: ['adj03', 'adj05', 'adj06', 'adj08']})
      console.log('return from words.js'); 
      console.log(this.words); 
      return this.words;
    }

    modShowHotCold(cnt) {
      //   this.gameArray[this.gameArray.length - cnt - 1].showHotCold = true; 
    }

}; 

module.exports = Game; 