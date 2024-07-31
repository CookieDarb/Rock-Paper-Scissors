function displayMove(playerMove,computerMove){
    document.querySelector('.js-moves').innerHTML=`
    <section class="col1">
        <h2>You</h2>
        <img src="img/${playerMove}-emoji.png" alt="${playerMove}" title="${playerMove}" height="100" width="100">
    </section>

    <section class="col2">
        <h2>Computer</h2>
        <img src="img/${computerMove}-emoji.png" alt="${computerMove}" title="${computerMove}" height="100" width="100">
    </section>`;
}

function draw(playerMove,computerMove){
    score.draw++;
    document.querySelector('.js-result').innerHTML=`Tie!`;
    displayMove(playerMove,computerMove);
}

function win(playerMove,computerMove){
    score.win++;
    document.querySelector('.js-result').innerHTML=`You win!`;
    displayMove(playerMove,computerMove);
}

function lose(playerMove,computerMove){
    score.lose++;
    document.querySelector('.js-result').innerHTML=`You lost!`;
    displayMove(playerMove,computerMove);
}

function generateRandom(){
    let randomValue=Math.random()*3;
    if(randomValue<1){
        return 'rock';
    }
    else if(randomValue<2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function checkWin(playerMove,computerMove){
    if(playerMove=='rock'){
        if(computerMove=='rock'){
            draw(playerMove,computerMove);
        }else if(computerMove=='scissors'){
            win(playerMove,computerMove);
        }
        else{
            lose(playerMove,computerMove);
        }
    }else if(playerMove=='scissors'){
        if(computerMove=='rock'){
            lose(playerMove,computerMove);
        }else if(computerMove=='scissors'){
            draw(playerMove,computerMove);
        }
        else{
            win(playerMove,computerMove);
        }    
    }else{
        if(computerMove=='rock'){
            win(playerMove,computerMove);
        }else if(computerMove=='scissors'){
            lose(playerMove,computerMove);
        }
        else{
            draw(playerMove,computerMove);
        }
    }
    console.log(score);
    document.querySelector('.js-score').innerHTML=`Wins: ${score.win} | Draws: ${score.draw} | Lost: ${score.lose}`;
    localStorage.setItem('score',JSON.stringify(score));
}

let score=JSON.parse(localStorage.getItem('score'))||{
    win:0,
    draw:0,
    lose:0
};

document.querySelector('.js-score').innerHTML=`Wins: ${score.win} | Draws: ${score.draw} | Lost: ${score.lose}`;