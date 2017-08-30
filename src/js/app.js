$(() => {
  const $ballons = $('.ballon');
  const $startBtn = $('.startBtn');
  const $resetBtn = $('.resetBtn');
  const $result = $('.result');
  const $points = $('.points');
  let score = 0;
  let greenCount = 0;

  // when you click on the start button it will start game
  $startBtn.on('click',() =>{
    greenCount = 0;
    $ballons.each((i, ballon) => {
      $(ballon).animate(({top: '-20%'}), Math.floor(Math.random() * 7000) + 7000)
        .addClass('animated pulse infinite');
      // if ballon is clicked dont run
      // for(i = greenCount;i <= 4;i++){
      $(ballon).animate({top: '100%'}, 0);
      //   if ($ballons.hasClass('green') === $(ballon).animate(({top: '-20%'}))){
      //     $(ballon).animate(({top: '100%'}, Math.floor(Math.random() * 7000) + 7000));
      //   }
      // }

      // wait for all green ballons to reach top -20% before you run the for loop in the startBtn

    });
  });

  // audio for pop ballon

  function blopAudio(){
    const audio = ('/audio/blop.wav');
    audio.play();
  }
  blopAudio();

  // the win and lose function with the score
  $ballons.on('click', (e) => {
    if($(e.target).hasClass('red')) {
      if(greenCount === 4) {
        $result.text('You Win').addClass('animated shake');
        score++;
        $ballons.stop();
        $ballons.css({top: '100%'});

      } else {
        $result.text('You Lose').addClass('animated shake');
        score--;
        $ballons.stop();
        $ballons.css({top: '100%'});
      }
      $points.text(score);
      $ballons.stop().css({top: '100%'});
    }
    if($(e.target).hasClass('green')) greenCount++;
    $(e.target).stop();
    $(e.target).css({top: '100%'});

  });

  // this button will reset the game
  $resetBtn.on('click',() =>{
    $resetBtn.html('Reset');
    $result.text('');
    $points.text('0');
    $ballons.stop().css({top: '100%'});
    score = 0;
  });


}); // end of DOMContentLoaded
