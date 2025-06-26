 let re = '';
    let choice = "";
    let score = JSON.parse(localStorage.getItem('score'));
    if (!score) {
      score = { win: 0, lose: 0, tie: 0 };
      localStorage.setItem('score', JSON.stringify(score));
    }
    showresult();
    showselection();
    updatescore();
function play(c) {
      computerplay();

      if (c === 'rock') {
        if (choice === 'rock') re = 'you tie';
        else if (choice === 'paper') re = 'you lose';
        else if (choice === 'scissors') re = 'you win';
      }
      else if (c === 'paper') {
        if (choice === 'rock') re = 'you win';
        else if (choice === 'paper') re = 'you tie';
        else if (choice === 'scissors') re = 'you lose';
      }
      else if (c === 'scissors') {
        if (choice === 'rock') re = 'you lose';
        else if (choice === 'paper') re = 'you win';
        else if (choice === 'scissors') re = 'you tie';
      }
      if(re==="you win")score.win++;
      else if(re==="you lose")score.lose++;
      else if(re=="you tie")score.tie++;
      localStorage.setItem('score',JSON.stringify(score));
      updatescore();
      showresult();
      showselection(c);
    }
    function showselection(userChoice=''){
      document.querySelector('.jsselection').innerHTML=`you <img src="image/${userChoice}-emoji.png"  class="css-rps">computer<img src="image/${choice}-emoji.png" class="css-rps">`;
    }
    function showresult(){
      document.querySelector('.jsresult').innerHTML=`${re}`;
    }
    function updatescore(){
      document.querySelector('.jsscore').innerHTML=`win:${score.win}, lose:${score.lose}, tie:${score.tie}`;
    }
    function computerplay() {
      const randomnum = Math.random();
      if (randomnum < 1 / 3) choice = "rock";
      else if (randomnum < 2 / 3) choice = "paper";
      else choice = "scissors";
    }