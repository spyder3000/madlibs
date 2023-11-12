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
      const joblist = [
         'accountant',   'acting understudy',    'administrative assistant',  'airline pilot',
         'astronaut',      'bartender',   'bathroom attendant',  'bodyguard', 
         'business analyst',    'CEO',  'civil engineer', 'clown', 
         'computer programmer',  'court jester',  'doctor',
         'dog walker',      'engineer',    'exotic dancer',
         'explorer',     'fashion model',   'financial planner',
         'food taster',     'football coach',     'garbage collector', 'gardner', 
         'haircut person',   'handyman',  'horse-whisperer', 'influencer', 
         'journalist',  'kindergarten teacher', 'lead singer',  'lifeguard', 
         'lounge singer',   'mascot',  'massage therapist',  'motivational speaker',  'news anchor',
         'nuclear engineer',    'nurse',   'office snitch',   'pastry chef',
         'personal shopper',   'pharmacist',   'playwright',
         'plumber',    'policeman', 'research scientist',   'rock collector',
         'rodeo clown',     'Santa Claus',     'security guard',
         'shopping greeter',    'state senator',    'test subject',  'truck driver',
         'underwear model',   'voice coach',   'waitress',
         'warehouse manager', 'zookeeper'
         ]; 
      
      let modJoblist = joblist.filter(item => !excludeList.includes(item)); 
      console.log('modJoblist.length = ' + modJoblist.length);  
      return modJoblist[Math.floor(Math.random() * modJoblist.length)];             
   }

   // getVerbWord -- this function returns a single value for job position & excludes certain values. 
   function getVerbWord(excludeList) {
      const initlist = [
            'acrobatic', 'analytical', 'babysitting',
            'backstabbing',      'binge-drinking',  'breakdancing',
            'bull-riding',       'bullying', 'butt-kissing',    'car washing',
            'childcare',   'coffee drinking',
            'collaborating', 'coworker blaming', 
            'cursing',           'debate',          'delegating',
            'dog-sitting',       'embezzling',      'excuse-making',  'field goal kicking',
            'fingerpainting', 'flirting', 'floor mopping',  'flyswatting', 'gossiping', 
            'gutter-cleaning', 'haircutting', 'imaginary', 
            'improv',            'investigative',   'journalism',
            'jousting',          'jump-roping',     'juggling',  'karate',
            'lawn-mowing',       'leadership',  'loitering',      'lunch stealing',  'management',
            'manure shoveling',  'marketing',         'massage',         'mud wrestling',
            'nail-clipping',     'poetry',          'poker playing', 'popcorn making',
            'power napping',     'programming',
            'rock-throwing',     'sabotaging',      'seduction',
            'shoe-tying',         'skydiving',       'song writing',
            'tap-dancing',   'town-crying',    'truth-telling',
            'ventriloquist',   'work doing',   'yodeling'
      ]; 
      // console.log(initlist.sort());
      
      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getAdjWord -- this function returns a single value for job position & excludes certain values. 
   function getAdjWord(excludeList) {
      const initlist = [ 'annoying',      'articulate',       'artificial',     'asinine',
            'awe-inspiring', 'awesome',          'awesome',        'birdbrained',
            'boring',        'brilliant',        'bug-eyed',       'bungling', 'calculating',
            'cheerful',      'clueless',         'clumsy',         'colorful', 'comical', 
            'cowardly',      'crazy',            'criminal',       'decisive',
            'delicious',     'despicable',       'dim-witted',     'disease-ridden',
            'disgusting', 'dramatic', 'evil', 'excellent',
            'explosive', 'fabulous',
         'fierce', 'flamboyant', 'glamorous',
         'great', 'groundbreaking', 'hard-working', 
            'helpful',       'hilarious',        'hopeless',       'horrible',
            'humongous',     'ill-fated',        'imaginary',      'innovative', 'insincere',
            'insipid',       'invisible',        'irresponsible',  'loud',
            'loyal',         'magical',          'maniacal',       'maniacal',
            'misguided',     'misinformed',      'money-grubbing', 'nauseating', 'offensive',
            'outdated',      'outrageous',       'overbearing',    'overblown',
            'overweight',    'pancake-flavored', 'parasitic',      'pathetic', 'people-pleasing', 'photogenic',
            'pleasant',      'polygamous',       'popular',        'powerful',
            'prosperous',    'purple',           'repulsive',      'ridiculous', 'ruthless', 
            'scrawny',       'sedated',          'senile',         'sexy',
            'sickly',        'sleepy',           'sober',          'sober',  'stupid',  'successful', 
            'talentless',    'tasteless',        'tear-filled',    'terrifying',
            'time wasting',  'tolerable',        'tolerant',       'triumphant',
            'twisted',       'ugly',             'uncomfortable',  'unconscious', 'underhanded', 
            'underwhelming', 'unhappy',          'unhealthy',      'unoriginal',
            'uptight',       'useless',         'vital', 'wealthy',        'wholesome', 'worthless'
      ]; 
      // console.log(initlist.sort()); 
      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getNounWord -- this function returns a single value for noun & excludes certain values. 
   function getNounWord(excludeList) {
      const initlist = [
         'Batman costume',  'ambition',  'banjo playing',   'bearhugs',
         'brown paper bag',    'can-do attitude',   'confusion',
         'deodorant samples',   'elephant',  'experience',
         'glow-in-the-dark underwear',  'hairbrush',   'hand-washing',
         'ice cream sandwich',  'indecency',  'jello shots', 'juggling skills', 
         'judgment',  'karaoke skills',   'lab jacket',
         'laziness',  'lunchbox',   'lunchbox',
         'madness',   'magic beans',   'manifesto',
         'medicine',  'misdemeanors',   'neck tattoos',
         'pajamas',   'pillow talk',    'pirate outfits',
         'profanity',   'professionalism',    'pterodactyl',
         'raincoat',    'remote control',    'riding crop',
         'sabotage',    'sanity',    'screaming',
         'sequined scarf',   'shadow',    'shotgun collection', 'sock puppets',
         'toilet paper',   'toothpaste',    'trashcan',
         'trombone',    'umbrella',    'ventriloquist',
         'work',   'work ethic'  
   ]; 
// console.log(initlist.sort()); 
      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getNounWord -- this function returns a single value for noun & excludes certain values. 
   function getNounPluralWord(excludeList) {
      const initlist = [
            
            'bath towels',    'candy canes', 'cat treats',
            'cheerleaders',   'cigarettes',  'clowns',
            'computers',      'CPR',    'dark magic',
            'dishwater',      'donkeys',
            'enemas',         'festivals',
            'hammocks',       'historical outhouses',  'horror movies', 'ice cubes',
            'infestations',   'insects',   'Instagram',
            'lawn-mowers',    'magazines',
            'mail boxes',     'motorboats',
            'orangutans',     'origami',
            'overcoats',      'pancakes',
            'party hats',     'plungers',
            'rainbows',       'scarecrows',  'Sesame Street',
            'shampoo commercials',   'showtunes',
            'snakes',        'snow blowers',
            'spandex',       'squirrels',
            'staplers',      'television',
            'trivia',        'tv sitcoms',
            'underwear',     'viking hats',
            'wheelbarrows',  'wine',
            'witchcraft'
      ]; 
     

      let modInitlist = initlist.filter(item => !excludeList.includes(item)); 
      console.log('modInitlist.length = ' + modInitlist.length);  
      return modInitlist[Math.floor(Math.random() * modInitlist.length)];             
   }

   // getNounItemWord -- this function returns a single value for Noun Items & excludes certain values. 
   function getNounItemWord(excludeList) {
      const initlist = [
         'bank records',   'bath towel',   'bike shorts',   
         'canteen',    'Christmas list',  'clown shoes',
         'codpiece',    'confession',   'Corn Flakes bowl',
         'cornbread recipe',    'dental xrays',    'diary',
         'doctor',   "favorite son's drawing",   'flyswatter',  'frequent flyer number', 
         'frisbee',   'gardening gloves',    'hairnet',
         'hippopotamus',   'holiday plans', 'hood ornament',     'hunting knife',
         'jester hat',   'jigsaw puzzle',    'Kermit the Frog action figure',
         'laundry',     'leftovers',    'Lego batmobile',
         'leprechaun', 'letter of recommendation', 'list of demands', 
         'list of enemies', 'lucky underwear', 'mugshot',
         'nightlight',    'nosehair trimmer',    
         'prom photos',   'ransom note',   'references',
         'resume',    'rooster',    'sandwich',  'sanity assessment', 
         'scissors',    'screenplay',    'shower curtain',
         'skateboard',    'snowman',   'soccer trophy',
         'socks',    'tennis shoes',   'toenail clippers',
         'toothbrush', 'trading card', 'washcloth', 
         'yearbook photo'
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