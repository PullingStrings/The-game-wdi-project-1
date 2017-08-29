$(() => {
  const $ballons = $('.ballon');
  let greenCount = 0;
  const $startBtn = $('.startBtn');
  const $resetBtn = $('.resetBtn');
  const $result = $('.result');
  const $points = $('.points');
  let score = 0;


  // when you click on the start button it will start game
  $startBtn.on('click',() =>{
    greenCount = 0;
    $ballons.each((i, ballon) => {
      $(ballon).animate(({top: '-20%'}), Math.floor(Math.random() * 6000) + 6000);
    });
  });
  // the win and lose function with the score
  $ballons.on('click', (e) => {
    if($(e.target).hasClass('red')) {
      if(greenCount === 4) {
        $result.text('You Win');
        score++;
      } else {
        $result.text('You Lose');
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
    $points.text('');
    $ballons.stop().css({top: '100%'});
    score.text('0');
  });

  // if red reaches -20% send ballon back to top 100%
  // const $startOver = $ballons.animate({top: '-20%'});
  // $startOver.on('animationend', (e) =>{
  //   if($(e.target).hasClass('red')){
  //     $ballons.stop().css({top: '100%'});
  //   }
  // });

}); // end of DOMContentLoaded
