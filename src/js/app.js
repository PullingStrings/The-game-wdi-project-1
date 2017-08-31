$(() => {
  const $ballons = $('.ballon');
  const $startBtn = $('.startBtn');
  const $resetBtn = $('.resetBtn');
  const $result = $('.result');
  const $points = $('.points');
  const popBallon = new Audio('audio/blop.wav');
  const backgroundMusic = new Audio('audio/backgroundMusic.mp3');
  const winAudio = new Audio('audio/win.mp3');
  const loseAudio = new Audio('audio/lose.mp3');
  let score = 0;
  let greenCount = 0;

  // when you click on the start button it will start game
  $startBtn.on('click',() =>{
    greenCount = 0;
    $ballons.each((i, ballon) => {
      $(ballon).animate(({top: '-20%'}), Math.floor(Math.random() * 7000) + 7000);
      $(ballon).animate({top: '100%'}, 0);
      backgroundMusic.play();
    });
  });


  // play again button
  const $playAgainBtn = $('.playAgainBtn');
  $playAgainBtn.on('click',() =>{
    greenCount = 0;
    $ballons.each((i, ballon) => {
      $(ballon).animate(({top: '-20%'}), Math.floor(Math.random() * 7000) + 7000);
      $(ballon).animate({top: '100%'}, 0);
      backgroundMusic.play();
    });
  });

  // the win and lose function with the score
  $ballons.on('click', (e) => {
    if($(e.target).hasClass('red')) {
      if(greenCount === 6) {
        $result.text('You Win').addClass('animated shake');
        score++;
        winAudio.play();
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        $ballons.stop();
        $ballons.css({top: '100%'});
      } else {
        $result.text('You Lose').addClass('animated flipInX');
        score--;
        loseAudio.play();
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        $ballons.stop();
        $ballons.css({top: '100%'});
      }
      $points.text(score);
      $ballons.stop().css({top: '100%'});
    }
    if($(e.target).hasClass('green')) greenCount++;
    popBallon.play();
    $(e.target).stop();
    $(e.target).css({top: '100%'});

  });

  // this button will reset the game
  $resetBtn.on('click',() =>{
    $resetBtn.html('Reset');
    $result.text('Will you Win or will you Lose');
    $points.text('You have reset so 0');
    $ballons.stop().css({top: '100%'});
    score = 0;
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    $playAgainBtn.show();
  });


});
