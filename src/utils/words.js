const Misc = require('./misc'); 

const Words = class { 
   constructor(typ) { 
        // Basic game setup 
      this.dat = {}; 
      this.wordtypes = { ...typ}; 
      console.log(this.wordtypes); 
      if (this.wordtypes.job) { this.getJobs(this.wordtypes.job); }
      if (this.wordtypes.noun) { this.getNouns(this.wordtypes.noun); }
      if (this.wordtypes.verb) { this.getVerbs(this.wordtypes.verb); }
      if (this.wordtypes.nounitem) { this.getNounItems(this.wordtypes.nounitem); }
      if (this.wordtypes.nounplural) { this.getNounPlurals(this.wordtypes.nounplural); }
      if (this.wordtypes.adj) { this.getAdjs(this.wordtypes.adj); }
      if (this.wordtypes.indicators) { this.getIndicators(this.wordtypes.indicators); }
      console.log(this.dat); 
      return this.dat; 
    } 

   getIndicators(ary) {
      console.log('getIndicators'); 
      console.log(ary); 
      var modcnt = ''; 
      for (let w = 0; w < ary.length; w++) { 
         modcnt = (w + 1).toString();  
         this.dat['indicator' + modcnt] = getIndicatorWord(this.dat[ary[w]]);  
      }  
   }

   getJobs(cnt) {
      var modcnt = ''; 
      var excludeJob = []; 
      for (let w = 0; w < cnt; w++) { 
         if (w < 9) modcnt = '0' + (w + 1).toString(); 
         else modcnt = (w + 1).toString();  
         this.dat['job' + modcnt] = getJobWord(excludeJob);  
         excludeJob.push(this.dat['job' + modcnt]); 
      }  
   }
   getVerbs(cnt) {
      var modcnt = ''; 
      var excludeVerb = []; 
      for (let w = 0; w < cnt; w++) { 
         if (w < 9) modcnt = '0' + (w + 1).toString(); 
         else modcnt = (w + 1).toString();  
         this.dat['verb' + modcnt] = getVerbWord(excludeVerb);  
         excludeVerb.push(this.dat['verb' + modcnt]); 
      }  
   }

   getAdjs(cnt) {
      var modcnt = ''; 
      var excludeAdj = []; 
      for (let w = 0; w < cnt; w++) { 
         if (w < 9) modcnt = '0' + (w + 1).toString(); 
         else modcnt = (w + 1).toString();  
         this.dat['adj' + modcnt] = getAdjWord(excludeAdj);  
         excludeAdj.push(this.dat['adj' + modcnt]); 
      }  
   }

   getNouns(cnt) {
      var modcnt = ''; 
      var excludeNoun = []; 
      for (let w = 0; w < cnt; w++) { 
         if (w < 9) modcnt = '0' + (w + 1).toString(); 
         else modcnt = (w + 1).toString();  
         this.dat['noun' + modcnt] = getNounWord(excludeNoun);  
         excludeNoun.push(this.dat['noun' + modcnt]); 
      }  
   }

   getNounPlurals(cnt) {
      var modcnt = ''; 
      var excludeNoun = []; 
      for (let w = 0; w < cnt; w++) { 
         if (w < 9) modcnt = '0' + (w + 1).toString(); 
         else modcnt = (w + 1).toString();  
         this.dat['nounplural' + modcnt] = getNounPluralWord(excludeNoun);  
         excludeNoun.push(this.dat['nounplural' + modcnt]); 
      }  
   }

   getNounItems(cnt) {
      var modcnt = ''; 
      var excludeNoun = []; 
      for (let w = 0; w < cnt; w++) { 
         if (w < 9) modcnt = '0' + (w + 1).toString(); 
         else modcnt = (w + 1).toString();  
         this.dat['nounitem' + modcnt] = getNounItemWord(excludeNoun);  
         excludeNoun.push(this.dat['nounitem' + modcnt]); 
      }  
   }

/*    randTargetValue(currVal) {
        var tmpVal = currVal; 
        while (tmpVal == currVal || this.mines.minesArray.indexOf(tmpVal) >= 0) {
            tmpVal = Misc.getRandomNum(this.firstNumber, this.totNumbers);  // Math.floor(Math.random() * this.totNumbers) + 1;  
        }		
        return tmpVal; 
    }*/

    modShowHotCold(cnt) {
      //   this.gameArray[this.gameArray.length - cnt - 1].showHotCold = true; 
    }
}; 

   // getJobWord -- this function returns a single value for job position & excludes certain values. 
   function getJobWord(excludeList) {
      const joblist = ["computer programmer", "astronaut", "truck driver", "plumber", 
            "horse-whisperer", "rock collector", "accountant", "engineer", "exotic dancer", 
            "waitress", "administrative assistant", "personal shopper", "rodeo clown", 
            "state senator", "news anchor", "massage therapist", "internet sales", 
            "football coach", "explorer", "journalist", "business analyst", "garbage collector", 
            "lead singer", "shopping greeter", "Santa Claus", "fashion model", "CEO", 
            "underwear model", "airline pilot", "security guard", "haircut person", 
            "accountant", "warehouse manager", "food taster", "bartender", 
            "nuclear engineer", "doctor", "voice coach", "bathroom attendant", "pastry chef", 
            "financial planner", "dog sitter", "civil engineer", "nurse", 
            "kindergarten teacher", "playwright", "lounge singer", "court jester", 
            "research scientist", "pharmacist"
         ]; 

      let modJoblist = joblist.filter(item => !excludeList.includes(item)); 
      console.log('modJoblist.length = ' + modJoblist.length);  
      return modJoblist[Math.floor(Math.random() * modJoblist.length)];             
   }

   // getVerbWord -- this function returns a single value for job position & excludes certain values. 
   function getVerbWord(excludeList) {
      const initlist = ["programming", "loitering", "chainsaw-juggling", "binge-drinking", "acrobatic", 
         "mud wrestling", "town-crying", "cursing", "marketing", "tap-dancing", "nail-clipping", "management", 
         "yodeling", "skydiving", "bull-riding", "rock-throwing", "embezzling", "power-napping", "dog-sitting", 
         "gutter-cleaning", "lawn-mowing", "sabotaging", "delegating", "jump-roping", "karate", "butt-kissing",
         "journalism", "car washing", "jousting", "investigative", "debate", "improv", "babysitting", 
         "song writing", "power napping", "fingerpainting", "haircutting", "analytic", "massage", 
         "backstabbing", "collaborating", "field goal kicking", "seduction", "showering", "popcorn making", 
         "breakdancing", "poetry", "coffee drinking"
      ]; 

      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getAdjWord -- this function returns a single value for job position & excludes certain values. 
   function getAdjWord(excludeList) {
      const initlist = ["ridiculous", "crazy", "sexy", "criminal", "polygamous", "outdated", "humongous", 
      "asinine", "worthless", "overblown", "uptight", "colorful", "uncomfortable", "hopeless", "repulsive", 
		"brilliant", "senile", "misguided", "clumsy", "horrible", "delicious", "hilarious", "unhealthy", 
      "cheerful", "clueless", "purple", "groundbreaking", "terrifying", "cowardly", "tasteless", 
      "disease-ridden", "offensive", "maniacal", "sober", "decisive", "powerful", "evil", "flamboyant", 
      "articulate", "photogenic", "unhappy", "misinformed", "calculating", "fierce", "loyal", 
		"sedated", "loud", "overbearing", "useless", "wealthy", "money-grubbing", "parasitic", "annoying", 
      "invisible", "fabulous", "magical", "helpful", "imaginary", "glamorous", "ugly", "awesome", 
      "outrageous", "insincere", "unconscious", "disgusting", "popular", "twisted", "ill-fated", "dim-witted", 
      "prosperous", "despicable", "triumphant", "tolerable", "irresponsible", "tear-filled", "talentless", 
      "time wasting", "underwhelming", "sober", "tolerant", "pancake-flavored", "unoriginal", 
      "overweight", "scrawny", "bug-eyed", "maniacal", "sleepy", "boring", "pleasant", "artificial", 
      "explosive", "sickly", "awesome", "awe-inspiring", "insipid", "birdbrained"
   ]; 

      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getNounWord -- this function returns a single value for noun & excludes certain values. 
   function getNounWord(excludeList) {
      const initlist = ["work", "experience", "laziness", "elephant", "riding crop", "trombone", 
      "profanity", "judgment", "screaming", "raincoat", "umbrella", 
      "pajamas", "manifesto", "hairbrush", "ice cream sandwich", "remote control", 
      "karaoke skills", "ventriloquist", "toothpaste", "trashcan", "medicine", 
      "misdemeanors", "sabotage", "sanity", "madness", "confusion", 
      "hand-washing", "jello shots", "pirate outfits", 
      "sock puppets", "deodorant samples", "pterodactyl", "work ethic", 
      "professionalism", "pillow talk", "brown paper bag", 
      "toilet paper", "indecency", "Batman costume", "sequined scarf", 
      "lab jacket", "magic beans", "bearhugs", "shadow", "lunchbox", 
      "neck tattoos", "banjo playing", "glow-in-the-dark underwear", "lunchbox", 
      "can-do attitude", "ambition"  
   ]; 

      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getNounWord -- this function returns a single value for noun & excludes certain values. 
   function getNounPluralWord(excludeList) {
      const initlist = ["computers", "clowns", "donkeys", "motorboats", "dishwater", "magazines", "bath towels", "television", 
         "orangutans", "hammocks", "ice cubes", "underwear", "cat treats", "festivals", "wine", "Sesame Street", 
      "snow blowers", "mail boxes", "staplers", "party hats", "shampoo commercials", "viking hats", "cheerleaders", 
      "pancakes", "wheelbarrows", "squirrels", "enemas", "infestations", "witchcraft", "scarecrows", "rainbows", 
      "origami", "snakes", "dark magic", "plungers", "showtunes", "trivia", "tv sitcoms", "spandex", "CPR", 
      "overcoats"
      ]; 

      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getNounItemWord -- this function returns a single value for Noun Items & excludes certain values. 
   function getNounItemWord(excludeList) {
      const initlist = ["resume", "doctor", "rooster", "laundry", "photograph", "leprechaun", "snowman", "bike shorts", 
         "canteen", "hairnet", "Corn Flakes", "scissors", "toothbrush", "codpiece", "jester hat", "skateboard", 
         "confession", "sandwich", "ransom note", "trading card", "leftovers", "toenail collection", "frisbee", 
         "washcloth", "flyswatter", "shower curtain", "jigsaw puzzle", "clown shoes", "nosehair trimmer", 
         "cornbread recipe", "Kermit the Frog action figure", "lucky pants", "hippopotamus", "hood ornament", 
         "nightlight", "hunting knife", "gardening gloves", "mugshot", "socks", "references", "soccer trophy", 
         "dental xrays", "favorite son's drawing", "bath towel", "bank records", "prom photos", 
         "Christmas list", "screenplay", "Lego batmobile", "tennis shoes", "diary"
      ]; 

      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getIndicatorWord -- this function returns a value of 'a' or 'an' depending on the input string. 
   function getIndicatorWord(val) {
      console.log('word = ' + val); 
		var first_letter = val.substring(0,1).toLowerCase(); 
      console.log('letter = ' + first_letter)
		if (first_letter == 'a' || first_letter == 'e' || first_letter == 'i'
			|| first_letter == 'o' || first_letter == 'u')  {
			return "an"; }
		else {	
			return "a";  }       
   }

module.exports = Words; 