var readlineSync=require("readline-sync");

const chalk = require('chalk');
const log = console.log;

log(chalk.yellow.bgBlue.bold('Hello! Welcome to the Football quiz.!\n'))
var intro= readlineSync.question(chalk.blue.bgGreen.bold('Please enter your name\n'));
log(chalk.cyanBright("Hi "+intro+", get ready for the quiz!"))

var score=0;
var flag=0;

var highscores=[{
  name:"Sahil",
  highScore: 7
},
{
  name:"Dev",
  highScore: 7
}]


log(chalk.black.bgYellowBright.bold('\nLEVEL 1')+chalk.yellow('\nAnswer 3 questions correctly to progress!\n'))

function play (question,answer){
  var answerOne=readlineSync.question(question)
  if(answerOne.toUpperCase()==answer.toUpperCase()){
    score=score+1;
    log(chalk.green("Correct answer!"+chalk.cyanBright("\nYour current score is : "+score))+"\n---------------------------")
  }else{
    log(chalk.red("Wrong answer!"+chalk.cyanBright("\nYour current score is : "+score))+"\n---------------------------")
  }
}

questionOne=chalk.yellowBright("In which country is the Premier League held?")+"\n a.Spain\n b.Italy\n c.England\n d.Germany\n";
answerOne="c";
play(questionOne,answerOne);

questionTwo=chalk.yellowBright("In which country is the La Liga held?")+"\n a.Spain\n b.Netherlands\n c.Portugal\n d.France\n";
answerTwo="a";
play(questionTwo,answerTwo);

questionThree=chalk.yellowBright("Where is Cristiano Ronaldo from?")+"\n a.Spain\n b.Brazil\n c.Portugal\n d.Columbia\n";
answerThree="c";
play(questionThree,answerThree);


questionFour=chalk.yellowBright("When is the next FIFA Football World Cup?")+"\n a.2024\n b.2022\n c.2023\n d.2021\n";
answerFour="b";
play(questionFour,answerFour);

questionFive=chalk.yellowBright("Which one of these is the Home stadium of Manchester United?")+"\n a.Stamford Bridge\n b.Old Trafford\n c.Wembley Stadium\n d.Camp Nou\n";
answerFive="b";

questionSix=chalk.yellowBright("How many Ballon D'or awards has Lionel Messi won?")+"\n a.7\n b.5\n c.6\n d.4 \n";
answerSix="c";

questionSeven=chalk.yellowBright("How many times have Manchester United been the champions of England?")+"\n a.20\n b.19\n c.18\n d.11 \n";
answerSeven="a";

questionEight=chalk.yellowBright("Which one of these was Cristiano Ronaldo's first club?")+"\n a.Sporting CP\n b.Manchester United\n c.Real Madrid\n d.Madeira FC \n";
answerEight="a";

if(score>=3){
  log(chalk.black.bgYellowBright.bold('\nLEVEL 2')+chalk.yellow("\nWell Done! Get ready for some more thinking!\n"))
  play(questionFive,answerFive);
  play(questionSix,answerSix);
  play(questionSeven,answerSeven);
  play(questionEight,answerEight);
  for(var a=0;a < highscores.length;a++){
    if(score >= highscores[a].highScore){
      flag=1;    
   }
  }
  log(chalk.yellow("Nice attempt!"))
  log(chalk.green.underline.bold("\nYour final score is")+chalk.green(" : "+score))
  if(flag==1){
    log(chalk.whiteBright.bgRed.bold("CONGRATULATIONS! This is a high score!\n"))
  }
  log(chalk.yellowBright.underline.bold("The high scores are")+chalk.yellowBright(" :\n")+ highscores[0].name+" - "+highscores[0].highScore+"\n"+highscores[1].name+" - "+highscores[1].highScore);
}
else{
  log(chalk.yellow("Sorry! You did not clear Level 1.")+chalk.green.underline.bold("\nYour final score is")+ chalk.green(" : "+score)+chalk.yellowBright.underline.bold("\n\nThe high scores are")+ chalk.yellowBright(" :\n")+ highscores[0].name+" - "+highscores[0].highScore+"\n"+highscores[1].name+" - "+highscores[1].highScore);
}



